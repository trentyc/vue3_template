import { ref } from "vue";
import { defineStore } from "pinia";
import type { UserState } from "@/stores/interface";
import piniaPersistConfig from "@/stores/helper/persist";

export const useUserStore = defineStore(
  "user",
  () => {
    let userInfo = ref({ name: "用户名", token: "token" });
    function setUserInfo(userInfo: UserState["userInfo"]) {
      userInfo = userInfo;
    }
    return { userInfo, setUserInfo };
  },
  {
    persist: {
      ...piniaPersistConfig
    }
  }
);
