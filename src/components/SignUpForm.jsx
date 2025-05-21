import { useState } from "react"
import { signupSchema } from "../schemas/signupSchema"
import { yupToFormError } from "../utils/yupToFormErrors"

export default function SignUpForm(){
  const styles = {
      divInput: "flex gap-2",
      input: "border-1 rounded-lg",
      textError: "text-red-500 font-medium"
    }
  
    const [form, setForm] = useState({
      username: "",
      nickname: "",
      password: "",
      confirmPassword: "",
      age: "",
      terms: false
    })
  
    const [errors, setErrors] = useState({})
  
  
    const handleChange = (e) => {
      setForm({ ...form, [e.target.name]: e.target.value })
    }

  const handleCheck = (e) => {
      setForm({ ...form, [e.target.name]: e.target.checked })
    }
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      try {
        await signupSchema.validate(form, {abortEarly: false})
        alert("ส่งสำเร็จ");
        setErrors({});
      } catch(err) {
        const errorObj = yupToFormError(err);
        setErrors(errorObj);
      }
    }
  
    return (
      <>
        <p className="text-2xl font-bold pb-10">ลงทะเบียน</p>
        <form className="space-y-2" onSubmit={handleSubmit}>
          <div className={styles.divInput}>
            <p>
              <label>Username</label>
              <input
                className={styles.input}
                type="text"
                name="username"
                value={form.username}
                onChange={handleChange}
              />
            </p><br />
            <p className={styles.textError}>{errors.username}</p>
          </div>
  
          <div className={styles.divInput}>
            <p>
              <label>ชื่อเล่น</label>
              <input
                className={styles.input}
                name="nickname"
                type="text"
                value={form.nickname}
                onChange={handleChange}
              />
            </p><br />
            <p className={styles.textError}>{errors.nickname}</p>
          </div>
  
          <div className={styles.divInput}>
            <p>
              <label>รหัสผ่าน</label>
              <input
                className={styles.input}
                type="password"
                name="password"
                value={form.password}
                onChange={handleChange}
              />
            </p><br />
            <p className={styles.textError}>{errors.password}</p>
          </div>
  
          <div className={styles.divInput}>
            <p>
              <label>ยืนยันรหัสผ่าน</label>
              <input
                className={styles.input}
                type="password"
                name="confirmPassword"
                value={form.confirmPassword}
                onChange={handleChange}
              />
            </p><br />
            <p className={styles.textError}>{errors.confirmPassword}</p>
          </div>


          <div className={styles.divInput}>
            <p>
              <label>อายุ</label>
              <input
                className={styles.input}
                type="number"
                min = "0"
                name="age"
                value={form.age}
                onChange={handleChange}
              />
            </p><br />
            <p className={styles.textError}>{errors.age}</p>
          </div>

          <div className={styles.divInput}>
            <p>
              <label>เงื่อนไข</label>
              <input
                className={styles.input}
                type="checkbox"
                name="terms"
                value={form.terms}
                onChange={handleCheck}
              />
            </p><br />
            <p className={styles.textError}>{errors.terms}</p>
          </div>
  
          <button type="submit">สมัคร</button>
        </form>
      </>
    )
  }
  