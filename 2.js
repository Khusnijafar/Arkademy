// Jawaban No. 2

function is_username_valid(username) {
    const usernameRegex = /^[a-z0-9_.-]{1,8}$/;
    return usernameRegex.test(username);
}

console.log(is_username_valid('zeronull'));

function is_email_valid(email) {
    const emailRegex = /^(?!.*__.*)[a-z0-9]{3,253}(_?)[a-z0-9]+(?:\.[a-z0-9!#$%&*+\/=?^`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9]*[a-z0-9])?$/;
    return emailRegex.test(email);
}

console.log(is_email_valid('aku@kamu.com'));
console.log(is_email_valid('kamu@aku.com'));

