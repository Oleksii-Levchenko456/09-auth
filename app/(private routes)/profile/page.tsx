

import Link from 'next/link'
import css from './ProfilePage.module.css'
import { getServerMe } from '@/lib/api/serverApi'
import Image from 'next/image'
// import { useEffect } from 'react'

const ProfilePage = async () => {
    const res = await getServerMe()

    // const res = await getMe()


    return (
        <>
            <main className={css.mainContent}>
                <div className={css.profileCard}>
                    <div className={css.header}>
                        <h1 className={css.formTitle}>Profile Page</h1>
                        <Link href="/profile/edit" className={css.editProfileButton}>
                            Edit Profile
                        </Link>
                    </div>
                    <div className={css.avatarWrapper}>
                        {res.avatar && <Image
                            src={res.avatar}
                            alt="User Avatar"
                            width={120}
                            height={120}
                            className={css.avatar}
                        />}
                    </div>
                    <div className={css.profileInfo}>
                        <p>

                            Username: {res.username}
                        </p>
                        <p>
                            Email: {res.email}
                        </p>
                    </div>
                </div>
            </main>

        </>
    )
}
export default ProfilePage