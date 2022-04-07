import styles from '../styles/components/contact.module.scss'
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';

import dynamic from 'next/dynamic'

const TextField = dynamic(() => import('@mui/material/TextField'))


const ContactForm = () => {
  return (
    <>
        <form className={styles.formInner} action="https://form.run/api/v1/r/sskm17wkftlu48frlce0axxw" method="post">
            <div className={styles.inputFormInner}>
              <TextField 
                id="outlined-basic"
                fullWidth 
                name="お名前" 
                required="true"
                type="text"
                color='primary'
                label="お名前"
                variant="outlined"
                
              />
            </div>

          <div>
            <div className={styles.inputFormInner}>
              <TextField
                fullWidth
                id="outlined-basic" 
                name="メールアドレス" 
                type="text"
                label="メールアドレス"
                required="true"
                variant="outlined"
                data-formrun-type="email" 
                data-formrun-required
                sx={{
                  backgroundColor: '#101010'
                }}
              />
            </div>
              {/* <div data-formrun-show-if-error="メールアドレス">メールアドレスを正しく入力してください</div> */}
          </div>
          <div>

          <div className={styles.inputFormInner}>
            <TextField
              fullWidth
              multiline
              rows={7}
              name="お問い合わせ"
              id="outlined-basic" 
              label="お問い合わせ内容(簡単で結構です)" 
              variant="outlined"
              data-formrun-required
              sx={{
                  backgroundColor: '#101010'
                }}
            />
          </div>
            
            {/* <div data-formrun-show-if-error="お問い合わせ">お問い合わせ入力してください</div> */}
          </div>
      

          {/* <div className={styles.formRunGotcha}>
            <label>If you are a human, ignore this field</label>
            <input 
              type="text" 
              name="_formrun_gotcha" 
              id="_formrun_gotcha" 
            />
          </div> */}

          <Button
            variant="contained"
            type="submit" 
            data-formrun-error-text="未入力の項目があります" data-formrun-submitting-text="送信中..."
            sx={{
              maxWidth: '210px',
              mx: 'auto',
              my: 5,
              pr: 3,
              pl: 3,
            }}
            >
              <SendIcon sx={{
                pr: 0.5,
              }}
            />
              送信する
          </Button>
        </form>
    </>
  )
}

export default ContactForm