import { useState } from "react"
import { loginSchema } from "../schemas/loginSchema"
import { yupToFormError } from "../utils/yupToFormErrors"

export default function LogInForm(){

  const styles = {
      divInput: "flex gap-2",
      input: "border-1 rounded-lg",
      textError: "text-red-500 font-medium"
    }
  
    const [form, setForm] = useState({
      email: "",
      password: "",
      day: "",
      age: ""
    })
  
    const [errors, setErrors] = useState({})
  
  
    const handleChange = (e) => {
      setForm({ ...form, [e.target.name]: e.target.value })
    }
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      try {
        await loginSchema.validate(form, {abortEarly: false})
        alert("ส่งสำเร็จ");
        setErrors({});
      } catch(err) {
        const errorObj = yupToFormError(err);
        setErrors(errorObj);
      }
    }
  
    return (
      <>
        <p className="text-2xl font-bold pb-10">ลงชื่อเข้าใช้</p>
        <form className="space-y-2" onSubmit={handleSubmit}>
          <div className={styles.divInput}>
            <p>
              <label>อีเมล</label>
              <input
                className={styles.input}
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
              />
            </p><br />
            <p className={styles.textError}>{errors.email}</p>
          </div>
  
          <div className={styles.divInput}>
            <p>
              <label>รหัสผ่าน</label>
              <input
                className={styles.input}
                name="password"
                type="password"
                value={form.password}
                onChange={handleChange}
              />
            </p><br />
            <p className={styles.textError}>{errors.password}</p>
          </div>
  
          <div className={styles.divInput}>
            <p>
              <label>วันที่</label>
              <input
                className={styles.input}
                type="number"
                name="day"
                value={form.day}
                onChange={handleChange}
              />
            </p><br />
            <p className={styles.textError}>{errors.day}</p>
          </div>
  
          <div className={styles.divInput}>
            <p>
              <label>อายุ</label>
              <input
                className={styles.input}
                type="number"
                name="age"
                value={form.age}
                onChange={handleChange}
              />
            </p><br />
            <p className={styles.textError}>{errors.age}</p>
          </div>
  
          <button type="submit">สมัครสมาชิก</button>
        </form>
      </>
    )
  }
  
   