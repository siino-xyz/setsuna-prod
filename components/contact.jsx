import styled from '@emotion/styled'

import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';




const FormInner = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: left;
  margin: auto;
  max-width: 500px;
  width: 100%;
`;
const InputFormWrapper = styled.div`
  width: 100%;
  max-width: 500px;
  margin: 1rem auto;
`;

const FromrunGotcha = styled.div`
  position:absolute!important;
  height:1px;width:1px;
  overflow:hidden;
`;

const ContactForm = () => {
  return (
    <>
        <FormInner action="https://form.run/api/v1/r/sskm17wkftlu48frlce0axxw" method="post">
            <InputFormWrapper>
              <TextField 
                id="outlined-basic"
                fullWidth 
                name="お名前" 
                type="text"
                label="お名前" 
                variant="outlined"
                sx={{
                  backgroundColor: '#101010'
                }}
              />
            </InputFormWrapper>

          <div>
            <InputFormWrapper>
              <TextField
                fullWidth
                id="outlined-basic" 
                name="メールアドレス" 
                type="text"
                label="メールアドレス" 
                variant="outlined"
                data-formrun-type="email" 
                data-formrun-required
                sx={{
                  backgroundColor: '#101010'
                }}
              />
            </InputFormWrapper>
              <div data-formrun-show-if-error="メールアドレス">メールアドレスを正しく入力してください</div>
          </div>
          <div>

          <InputFormWrapper>
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
          </InputFormWrapper>
            
            <div data-formrun-show-if-error="お問い合わせ">お問い合わせ入力してください</div>
          </div>
        
          {/* 
          <div>
            <label>個人情報利用同意 [必須]</label>
            <input 
              type="checkbox" 
              name="個人情報利用同意" 
              data-formrun-required 
            />
            <div data-formrun-show-if-error="個人情報利用同意">同意してください</div>
          </div> */}

          <FromrunGotcha>
            <label>If you are a human, ignore this field</label>
            <input 
              type="text" 
              name="_formrun_gotcha" 
              id="_formrun_gotcha" 
            />
          </FromrunGotcha>

          <Button
            variant="outlined"
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
        </FormInner>
    </>
  )
}

export default ContactForm