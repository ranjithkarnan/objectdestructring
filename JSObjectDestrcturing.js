
// Object Destructring 


let userDetail ={ 
    firstName: "Ranjith",
    lastName: "Karnan",
    emailAddress:"ranjith.karnantesting+105qa@gmail.com",
    phoneNumber: 999-999-9999,
    Address:"32/N 4, 100 Feet Rd, Hindustan Teleprinters Staff Quarters, Ambal Nagar, Ekkatuthangal, Chennai, Tamil Nadu 600032, Chennai, Tamil Nadu, 600032, India",
    mfaCredential: "false",
    settings: ["Device Settings", "Account Settings", "Group Settings", "Filter Settings"],

    fulName () { 
        return `${this.firstName} ${this.lastName}`
    }
}

 const {firstName,lastName,emailAddress} = userDetail

 console.log(firstName,lastName,Email);
 

const {phoneNumber,...otherdetails} = userDetail;

({
    firstName:"Ranjith",
    lastName :"Karnan",
    emailAddress:"ranjith.karnantesting+105qa@gmail.com",
    phoneNumber:"999-999-9999",

}
)
console.log(firstName,otherdetails);


function Enviorment({firstName,lastName,emailAddress,phoneNumber}) {

    // return `${userDetail.firstName} ${userDetail.lastName} ${userDetail.emailAddress} ${userDetail.phoneNumber}`

    console.log(`Hi Helo my name is ${firstName} ${lastName} and my email address is ${emailAddress} and contact my phone number ${phoneNumber}`);
}

Enviorment(userDetail)






 


