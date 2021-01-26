var name = 'dep'
var email = 'mail'
const students = [
    {
        fullname: 'trung',
        emails: 'mail'
    },
    {
        fullname: 'anh',
        emails: 'mail'
    },
    {
        fullname: 'dep',
        emails: 'mail'
    }
]

const checkLogin = students.find((v, i) => {
    if ((v.fullname === name) && (v.emails === email)) {
        // document.getElementById('login').innerHTML = 'thanh cong'
        console.log('ok')

    } else {
        console.log('error')
    }
})