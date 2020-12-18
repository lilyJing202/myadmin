import myaxios from "../myaxios/myaxios";

/* 
    导出各种接口
*/
// export const login = (params) =>
//   myaxios.post("admin/login", params).catch((err) => console.log(err)); //相当于下面的
export const login = (params) =>{
   return  myaxios.post("admin/login", params).catch((err) => console.log(err));
}