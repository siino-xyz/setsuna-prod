import styled from '@emotion/styled'


const FromrunGotcha = styled.div`
  position:absolute!important;
  height:1px;width:1px;
  overflow:hidden;
`;

const ContactForm = () => {
  return (
    <>
    <form  action="https://form.run/api/v1/r/sskm17wkftlu48frlce0axxw" method="post">
      <div>
        <label>お名前</label>
        <input 
          name="お名前"
          type="text"/>
      </div>

      <div>
        <label>メールアドレス [必須]</label>
        <input 
          name="メールアドレス" 
          type="text" 
          data-formrun-type="email" 
          data-formrun-required 
        />
        <div data-formrun-show-if-error="メールアドレス">メールアドレスを正しく入力してください</div>
      </div>

      <div>
        <label>お問い合わせ [必須]</label>
        <textarea name="お問い合わせ" data-formrun-required></textarea>
        <div data-formrun-show-if-error="お問い合わせ">お問い合わせ入力してください</div>
      </div>

      <div>
        <label>個人情報利用同意 [必須]</label>
        <input 
          type="checkbox" 
          name="個人情報利用同意" 
          data-formrun-required 
        />
        <div data-formrun-show-if-error="個人情報利用同意">同意してください</div>
      </div>

      <FromrunGotcha>
       
        <label>If you are a human, ignore this field</label>
        <input 
          type="text" 
          name="_formrun_gotcha" 
          id="_formrun_gotcha" 
        />
      </FromrunGotcha>

      <button type="submit" data-formrun-error-text="未入力の項目があります" data-formrun-submitting-text="送信中...">送信</button>
    </form>
    </>

  )
}

export default ContactForm