import { useAppStore } from "@/store"

const Profile = () => {
  const {userInfo, setUserInfo}=useAppStore();
  return (
    <div>
      Profile: {userInfo.email}
    </div>
  )
}

export default Profile