import * as Yup from 'yup'

export const signupSchema = Yup.object({
  username: Yup.string()
  .min(3, ({path, value}) => `${path} ต้องมีอย่างน้อย 3 ตัว ตอนนี้มีแค่ ${value.length}`)
  .required("กรุณาก รอกอีเมล"),
  nickname: Yup.string()
  .min(3, ({path, value}) => `${path} ต้องมีความยาว 3-10 ตัว`)
  .max(10, ({path, value}) => `${path} ต้องมีความยาว 3-10 ตัว`)
  .required("กรุณากรอกชื่อเล่น"),
  password: Yup.string()
  .min(6, ({path, value}) => `${path} ต้องมีอย่างน้อย 6 ตัว ตอนนี้มีแค่ ${value.length}`)
  .required("กรุณากรอกรหัสผ่าน"),
  confirmPassword: Yup.string()
  .min(6, ({path, value}) => `${path} ต้องมีอย่างน้อย 6 ตัว ตอนนี้มีแค่ ${value.length}`)
  .oneOf([Yup.ref("password")])
  .required("กรุณายืนยันรหัสผ่าน"),
  age: Yup.number()
  .typeError("ต้องเป็นตัวเลข")
  .min(13, ({path, value}) => `${path} ต้องมีอายุมากกว่า 13 ปี ตอนนี้คือ ${value.length}`)
  .required("กรุณากรอกอายุ"),
  terms: Yup.boolean()
  .oneOf([true], "กรุณายอมรับเงื่อนไขก่อนสมัคร")
})