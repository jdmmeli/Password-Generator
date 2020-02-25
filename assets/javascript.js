var password = {
    "lowercase": "a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y, z",
    "uppercase": "A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, T, U, V, W, X, Y, Z",
    "numbers": "1,2,3,4,5,6,7,8,9",
    "special": "!,@,#,$,%,&,*",
    "length": "length.value"
}


  

function userCriteria () {
    var length = prompt("Please choose length of password, between 8-128 characters");
    console.log(length);

    var lowercase = confirm("Click ok to include lowercase letters");
    console.log(lowercase);

    var uppercase = confirm("CLick ok to include uppercase letters");
    console.log(uppercase);

    var numbers = confirm("CLick ok to include numbers");
    console.log(numbers);

    var special = confirm("click ok to include special characters");
    console.log(special);
}