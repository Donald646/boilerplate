// UserData.tsx
import getProfile from '@/queries/user/getProfile'
import getUser from '@/queries/user/getUser'

export default async function UserData() {
    const user = await getUser()
    const profile = user?.id ? await getProfile(user.id) : null
    return { user, profile }
}