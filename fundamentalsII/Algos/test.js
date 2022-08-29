a      = [5, 5, 5, 2, 2, 2, 2, 2, 9, 4];
result = { };
for(var i = 0; i < a.length; ++i) {
    if(!result[a[i]])
        result[a[i]] = 0;
    ++result[a[i]];
}
console.log(result)