'use client'

import css from './SignUpPage.module.css'
import { register } from '@/lib/api/clientApi'
import { registerRequest } from '@/lib/api/clientApi'
import { useRouter } from 'next/navigation'
import { useAuthStore } from '@/lib/store/authStore'


const Register = () => {
    const router = useRouter()

    const setUser = useAuthStore((state) => state.setUser)

    const handleSubmit = async (formData: FormData) => {
        const formValues = Object.fromEntries(formData) as registerRequest
        const res = await register(formValues)
        if (res) {
            setUser(res)
            router.push('/profile')
        }

    }

    return (
        <main className={css.mainContent}>
            <h1 className={css.formTitle}>Sign up</h1>
            <form className={css.form} action={handleSubmit}>
                <div className={css.formGroup}>
                    <label htmlFor="email">Email</label>
                    <input id="email" type="email" name="email" className={css.input} required />
                </div>

                <div className={css.formGroup}>
                    <label htmlFor="password">Password</label>
                    <input id="password" type="password" name="password" className={css.input} required />
                </div>

                <div className={css.actions}>
                    <button type="submit" className={css.submitButton}>
                        Register
                    </button>
                </div>

                <p className={css.error}>Error</p>
            </form>
        </main>

    )
}
export default Register