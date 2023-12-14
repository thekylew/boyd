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

O(n^2)

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
hae
hal
hat
hac
har
hle
hla
hlt
hlc
hlr
hte
hta
htl
htc
htr
hce
hca
hcl
hct
hcr
hre
hra
hrl
hrt
hrc
eha
ehl
eht
ehc
ehr
eah
eal
eat
eac
ear
elh
ela
elt
elc
elr
eth
eta
etl
etc
etr
ech
eca
ecl
ect
ecr
erh
era
erl
ert
erc
ahe
ahl
aht
ahc
ahr
aeh
ael
aet
aec
aer
alh
ale
alt
alc
alr
ath
ate
atl
atc
atr
ach
ace
acl
act
acr
arh
are
arl
art
arc
lhe
lha
lht
lhc
lhr
leh
lea
let
lec
ler
lah
lae
lat
lac
lar
lth
lte
lta
ltc
ltr
lch
lce
lca
lct
lcr
lrh
lre
lra
lrt
lrc
the
tha
thl
thc
thr
teh
tea
tel
tec
ter
tah
tae
tal
tac
tar
tlh
tle
tla
tlc
tlr
tch
tce
tca
tcl
tcr
trh
tre
tra
trl
trc
che
cha
chl
cht
chr
ceh
cea
cel
cet
cer
cah
cae
cal
cat
car
clh
cle
cla
clt
clr
cth
cte
cta
ctl
ctr
crh
cre
cra
crl
crt
rhe
rha
rhl
rht
rhc
reh
rea
rel
ret
rec
rah
rae
ral
rat
rac
rlh
rle
rla
rlt
rlc
rth
rte
rta
rtl
rtc
rch
rce
rca
rcl
rct

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