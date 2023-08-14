import Head from 'next/head'
import { useState } from 'react'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import { Input } from '@/components' 
import { postData, apis } from '@/api';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  const [ccNum, setCcNum] = useState('');
  const [error, setError] = useState('');
  const [validating, setIsValidating] = useState(false)
  const [showSuccess, setShowSuccess] = useState(false);
 
  const handleSubmit: React.FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();

    try {
      setIsValidating(true);
      const result = await postData(apis.validate, { cardNum: ccNum })

      if (result.success) {
        setShowSuccess(true)
      } else {
        setError(result.message)
      }      
    } catch (err) {
      setError('Something went wrong, please retry')
    }
    setIsValidating(false);
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setError('');
    setShowSuccess(false);
    setCcNum(e.target.value);
  }

  return (
    <>
      <Head>
        <title>Luhn Validation</title>
        <meta name="description" content="Validates Credit Card number using Luhn Alogorithm" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`${styles.main} ${inter.className}`}>
        <h1 className={styles.title}>Luhn Validation</h1>
        <form className={styles['cc-form']} onSubmit={handleSubmit}>
          <Input type="text" placeholder='Enter Credit Card Number'onChange={handleInputChange} errMsg={error}/>
          <button className={styles['cc-form__btn']} disabled={validating}>{validating ? 'Validating Card...' : 'Submit'}</button>
        </form>
        {showSuccess && <div className={styles['cc-form__success-msg']}>Valid Card</div>}
      </main>
    </>
  )
}
