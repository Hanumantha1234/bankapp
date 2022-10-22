const InitialData={
    details:[
    {customerName:"Sam", accountNo:1235000,accountBalance:5000, accountType:"Saving" },
    {customerName:"Hanumantha", accountNo:1085000,accountBalance:5300, accountType:"Saving" },
    {customerName:"Anil", accountNo:10850,accountBalance:59300, accountType:"Saving" }
]}

export const CustomerReducer=(state=InitialData,action)=>{
return state;
}