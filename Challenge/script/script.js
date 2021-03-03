// Challenge 01
const BLANK6 = "      ";
const BLANK4 = "    ";
const BLANK2 = "  ";
const BLANK1 = " ";

let weirdArr = [
    ["Vienna", BLANK2, BLANK1, BLANK4, BLANK4],
    [BLANK6, "is", BLANK1, BLANK4, BLANK4],
    [BLANK6, BLANK2, "a", BLANK4, BLANK4],
    [BLANK6, BLANK2, BLANK1, "nice", BLANK4],
    [BLANK6, BLANK2, BLANK1, BLANK4, "city"],
]

for (let line of weirdArr) {
    console.log(line.join(""));
}

// Challenge 02
let weirdStr = "Properties,$a$set$of$immutable$values,$are$passed$to$a$component's$renderer$as$properties$in$its $HTML$tag.$A$component$cannot$directly$modify$any$properties$passed$to$it,$but$can$be$passed$ callback$functions$that$do$modify$values.$This$mechanism's$promise$is$expressed$as$properties $flow$down;$actions$flow$up";

let normalStr = weirdStr.split("$").join(" ");

console.log(normalStr);
