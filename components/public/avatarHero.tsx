import AvatarCircles from "../ui/avatar-circles";

const avatarUrls = [
    "https://lh3.googleusercontent.com/a/ACg8ocICIdHbuExjLiQlt8JJFEz017uehFOYKhqqJ8eS4NvdMOk8Pw=s96-c",
    "https://lh3.googleusercontent.com/a/ACg8ocIoDF2CwGYOE-07fCSMoBlIwe0wTBH1T01uZ3ScvfwKskjmww=s96-c",
    "https://lh3.googleusercontent.com/a/ACg8ocKjyWtoIIDedQCvBXUIKOkT-21Bm1Ulb4-IsTEyWEHlP4LkNAw=s96-c",
    "https://lh3.googleusercontent.com/a/ACg8ocK2mMB-h9Nz9BGcnbfu7mSYOX7XbmjJxXuFgfYQToakQrtipDcT=s96-c",
  ];
export async function AvatarHero() {
  return (
    <div className="flex flex-col items-center justify-center">
  <AvatarCircles numPeople={200} avatarUrls={avatarUrls} />
  <p className="font-bold text-primary-dark"> {/* Updated color */}
    Join 200+ learners
  </p>
    </div>
  )
}
