import { ref } from "vue";
import router from "@/router/index";
import { ElMessage } from "element-plus";
import { defineStore } from "pinia";

export const UseRetrievePassStore = defineStore("RetrievePassWord", () => {
  const count = ref(0);
  const email = ref("");
  const emailVeriflcationCode = ref();
  const state = ref("process")
  const oldPassword = ref("")
  const newPassword = ref("")

  const pattern_email: RegExp =
    /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;

  const next = () => {
    if (count.value === 0){
        if (email.value === "") {
            ElMessage({
              message: "email为空",
              type: "error",
              plain: true,
            });
          } else if (!pattern_email.test(email.value)) {
            ElMessage({
              message: "email格式有误",
              type: "error",
              plain: true,
            });
          }else{
              count.value++
          }
    }
    else if (count.value < 3){
        if (emailVeriflcationCode.value != ""){
            // 判断验证码是否正确
            if (emailVeriflcationCode.value === "qwer"){
                count.value++
                // 发送请求，如果发送成功，然后判断旧密码是否正确，然后更改密码，
                // 更改成功就显示 success (待写)
                state.value = "success"
            }else{
                state.value = "error"
                ElMessage({
                    message: "验证码错误",
                    type: "error",
                    plain: true,
                  });
            }
        }else{
            state.value = "error"
            ElMessage({
                message: "验证码为空",
                type: "error",
                plain: true,
              });
        }
    }
  };
  return {
    oldPassword,
    newPassword,
    state,
    count,
    email,
    emailVeriflcationCode,
    next,
  };
});
