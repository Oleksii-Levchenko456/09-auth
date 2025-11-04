'use client'


import { useAuthStore } from '@/lib/store/authStore'
import css from './AuthNavigation.module.css'
import Link from "next/link"
import { useRouter } from 'next/navigation'


export const AuthNavigation = () => {

    const { isAuthenticated, clearIsAuthenticated } = useAuthStore()
    const router = useRouter()

    const handleClick = () => {
        clearIsAuthenticated()
        router.push('/sign-in')
    }

    return isAuthenticated ? (
        <ul>
            <li className={css.navigationItem}>
                <Link href="/profile" prefetch={false} className={css.navigationLink}>
                    Profile
                </Link>
            </li>
            <li className={css.navigationItem}>
                <p className={css.userEmail}>User email</p>
                <button className={css.logoutButton} onClick={handleClick}>
                    Logout
                </button>
            </li>
        </ul>) : (
        <ul>
            <li className={css.navigationItem}>
                <Link href="/sign-in" prefetch={false} className={css.navigationLink}>
                    Login
                </Link>
            </li>
            <li className={css.navigationItem}>
                <Link href="/sign-up" prefetch={false} className={css.navigationLink}>
                    Sign up
                </Link>
            </li>
        </ul>


    )

}
