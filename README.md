# boyd

This code can be tested using:

`npm run letters -- healthcare`
`npm run numbers -- 5 6 9 12 15`

## letters

Given for any string of any length, return a list of permutations (order matters) of all only 3 letter strings that have no repeated characters and no repeated permutation.

healthcare

hea
hel
het
car
cae

(not acceptable)

hee
haa
hth

*NOTE*: I assume that when you say "order matters," you would want "hea" but not "hae," since "a" appears after "e".

1. What is the alogrithm's big 0 notation for your solution?

From ChatGPT:

O(m^2)

2. What are some options for looping that you have done for code?

I am not entirely sure what you meant by "options for looping done for code." If you mean different ways of looping, they are as follows:

* `for ... of` to go through the characters in the string. This is because a JavaScript string is not an array, else I would use `forEach`.
* Two nested `for` loops in `generatePermutations`, which are used to go through the array of possible letters to create the permutation strings.
* A `forEach` through the array of unique letters when generating the permutations.

3. What was the result for "healthcare"?

hea
hel
het
hec
her
hal
hat
hac
har
hlt
hlc
hlr
htc
htr
hcr
eha
ehl
eht
ehc
ehr
eal
eat
eac
ear
elt
elc
elr
etc
etr
ecr
ahe
ahl
aht
ahc
ahr
ael
aet
aec
aer
alt
alc
alr
atc
atr
acr
lhe
lha
lht
lhc
lhr
lea
let
lec
ler
lat
lac
lar
ltc
ltr
lcr
the
tha
thl
thc
thr
tea
tel
tec
ter
tal
tac
tar
tlc
tlr
tcr
che
cha
chl
cht
chr
cea
cel
cet
cer
cal
cat
car
clt
clr
ctr
rhe
rha
rhl
rht
rhc
rea
rel
ret
rec
ral
rat
rac
rlt
rlc
rtc

## numbers

Create a method that will take in an array of integers and replace each number in the array with the product of all the numbers in the array except the number at the index itself.

1. What is the alogrithm's big 0 notation for your solution?

O(n)

2. What are some options for looping that you have done for code?

Assuming you mean types of loops, I used

* `Array.map` to convert the input array to numbers and to transform the input array
* Array destructuring with a concatenation of `Array.slice` operations to get the array with the current number missing
* `Array.reduce` to do the multiplication operation on the remaining numbers

3. What was the result for [5, 6, 9, 12, 15]?"

[ 9720, 8100, 5400, 4050, 3240 ]