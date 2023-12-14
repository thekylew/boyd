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

1. What is the alogrithm's big 0 notation for your solution?

From ChatGPT:

"The big O complexity of your code can be analyzed as follows:

Creating the uniqueCharacters array: This part involves iterating through the givenString to create an array of unique characters. The time complexity for this operation is O(n), where 'n' is the length of the givenString.

Generating the permutations for each character: The generatePermutations function uses two nested loops to generate permutations, and it runs for each unique character in uniqueCharacters. Since the inner loops run for a constant number of iterations (3 * 2 = 6 iterations), the overall time complexity for this part is O(m), where 'm' is the number of unique characters in uniqueCharacters.

Concatenating the permutations: The code concatenates the generated permutations into the result array using concat(). The concatenation operation has a time complexity of O(k), where 'k' is the total number of permutations generated.

Overall, the time complexity of your code is dominated by the part that generates permutations for each character, which is O(m), and the concatenation operation, which is O(k). If 'm' and 'k' are relatively small compared to 'n' (the length of the givenString), then the code is reasonably efficient. However, if 'm' and 'k' grow significantly, it could impact the overall performance."

This sounds correct to me. I believe the solution ChatGPT wrote when prompted with just your problem was less efficient, O(n^3).

2. What are some options for looping that you have done for code?

I am not entirely sure what you meant by "options for looping," but as described above, the solution uses three loops: One to get the unique letters from the string, another to loop through and generate permutations for each letter, and another to merge the resulting arrays into a final solution.

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