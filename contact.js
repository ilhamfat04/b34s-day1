function showData() {
    // DOM = Document Object Model
    let name = document.getElementById("name").value
    let email = document.getElementById("email").value
    let phone = document.getElementById("phone").value
    let subject = document.getElementById("subject").value
    let message = document.getElementById("message").value

    document.getElementById("name").value = ""

    // VALIDATION
    if (name == "") {
        return alert("Name input must not be empty")
    }

    let emailReceiver = "jokowi@gmail.com"

    let a = document.createElement('a')
    a.href = `mailto:${emailReceiver}?subject=${subject}&body=Hello, my name ${name}, ${subject}, ${message}, this is my phone ${phone}`
    // a.href = "https://www.autofun.co.id/mobil"
    // a.click()

    // kata-kunci nama = {
    //     proprty-name : value
    // }

    let dataObject = {
        name: name,
        email: email,
        phone,
        subject,
        message
    }

    console.table(dataObject)
}
