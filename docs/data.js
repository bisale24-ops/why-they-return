window.WTR = {
 "reviews": {
  "gemma": {
   "fit": {
    "precision": 0.6412429378531074,
    "recall": 0.7566666666666667,
    "f1": 0.6941896024464832
   },
   "small": {
    "precision": 0.7318611987381703,
    "recall": 0.7733333333333333,
    "f1": 0.7520259319286872
   },
   "large": {
    "precision": 0.8427947598253275,
    "recall": 0.6433333333333333,
    "f1": 0.7296786389413988
   },
   "macro_f1": 0.7252980577721897,
   "accuracy": 0.7244444444444444
  },
  "keyword": {
   "fit": {
    "precision": 0.46525096525096526,
    "recall": 0.8033333333333333,
    "f1": 0.5892420537897312
   },
   "small": {
    "precision": 0.757201646090535,
    "recall": 0.6133333333333333,
    "f1": 0.6777163904235727
   },
   "large": {
    "precision": 0.8705035971223022,
    "recall": 0.4033333333333333,
    "f1": 0.55125284738041
   },
   "macro_f1": 0.606070430531238,
   "accuracy": 0.6066666666666667
  },
  "n": 900,
  "unparsed": 0
 },
 "products_rank": {
  "small": {
   "gemma": 0.7336037556323729,
   "keyword": 0.6419193409763978
  },
  "large": {
   "gemma": 0.783476536974324,
   "keyword": 0.7320991073822035
  }
 },
 "run": {
  "gpu": "AMD Radeon Pro W7900D",
  "torch": "2.13.0+rocm10.0.0",
  "hip": "7.15.26333",
  "model": "unsloth/gemma-3-12b-it",
  "reviews": 3300,
  "seconds": 2548.252430677414,
  "reviews_per_s": 1.295005141669872
 },
 "products": [
  {
   "item": "1076484",
   "category": "dress",
   "n_reviews": 551,
   "sampled": 60,
   "true_small": 0.13611615245009073,
   "true_large": 0.07622504537205081,
   "pred_small": 0.2833333333333333,
   "pred_large": 0.15,
   "kw_small": 0.21666666666666667,
   "kw_large": 0.05,
   "causes": {
    "length": 0.15,
    "comfort": 0.15,
    "fabric_quality": 0.06666666666666667,
    "other": 0.03333333333333333,
    "zipper_or_closure": 0.016666666666666666,
    "style_vs_photo": 0.016666666666666666
   },
   "report": {
    "size_note": "Runs small: most customers size up one.",
    "listing_fix": "This style tends to run a bit small, especially in the arms and rib area. We recommend checking the size chart carefully and considering sizing up for a more comfortable fit.",
    "photo_to_add": "Size chart with measurements for chest, waist, and length.",
    "headline": "Small sizing is a common issue."
   },
   "examples": [
    {
     "text": "Light air dress Nice dress, just didn't fit right around the mid section . I didn't get to wear this dress",
     "fit": "small",
     "quote": "didn't fit right around the mid section",
     "causes": [
      "other"
     ],
     "fix": "Consider adding that the dress may run slightly small in the midsection."
    },
    {
     "text": "Great Dress for a fun evening!  Dress was gorgeous! Loved the pockets! Does run tad bit small, but overall beautiful dress!!",
     "fit": "small",
     "quote": "Does run tad bit small",
     "causes": [],
     "fix": "Consider sizing up for a more comfortable fit."
    },
    {
     "text": "Nice dress with great details It's a nice dress, but I wasn't blown away by it. Fits overall pretty well but was a little tight around the ribs.",
     "fit": "small",
     "quote": "a little tight around the ribs",
     "causes": [
      "comfort"
     ],
     "fix": "Consider mentioning that the dress may fit snugly around the ribs."
    },
    {
     "text": "I didn't wear it. Runs small.  For me the high waist was a little too tight and then the skirt was too poufy.  Pretty dress though if you have the right shape for it.",
     "fit": "small",
     "quote": "Runs small",
     "causes": [
      "length"
     ],
     "fix": "Consider suggesting customers size up, especially if they prefer a more relaxed fit around the waist."
    }
   ]
  },
  {
   "item": "1213427",
   "category": "gown",
   "n_reviews": 306,
   "sampled": 60,
   "true_small": 0.08823529411764706,
   "true_large": 0.03594771241830065,
   "pred_small": 0.13333333333333333,
   "pred_large": 0.08333333333333333,
   "kw_small": 0.16666666666666666,
   "kw_large": 0.0,
   "causes": {
    "length": 0.3333333333333333,
    "zipper_or_closure": 0.05,
    "other": 0.03333333333333333,
    "comfort": 0.03333333333333333,
    "fabric_quality": 0.016666666666666666
   },
   "report": {
    "size_note": "Runs small: most customers size up one.",
    "listing_fix": "This dress tends to run smaller than expected, especially in the waist and hip areas. We recommend checking the size chart carefully and considering sizing up for a more comfortable fit.",
    "photo_to_add": "Size chart with measurements for each size.",
    "headline": "Small fit, size up recommended"
   },
   "examples": [
    {
     "text": "Beautiful dress for a black tie wedding  The length was good- Just a little tight in the stomach area",
     "fit": "small",
     "quote": "a little tight in the stomach area",
     "causes": [
      "comfort"
     ],
     "fix": "Consider suggesting customers size up if they have a larger midsection."
    },
    {
     "text": "Fun/young dress to wear for black-tie event! Definitely a tighter fit - I'm normally a 6L, but wanted to feel comfortable dancing so went with the 8R! I'm 5'10\" and wore little kitten heels. If I wanted to wear 3\" heels I would have probably preferred the 8L! Would love to rent this one again.",
     "fit": "small",
     "quote": "Definitely a tighter fit",
     "causes": [],
     "fix": "Consider suggesting customers size up if they prefer a more relaxed fit for dancing or wearing heels."
    },
    {
     "text": "Beautifully simple/sexy dress!  Long. I wore 3.5/4 inch heels and it was still slightly too long.  Other than that, very easy to wear! Note: if you're on the fence between two sizes, go with the smaller. Even on the 2, the back bottom part of the skirt loosened up while dancing/towards the end of the night.",
     "fit": "small",
     "quote": "go with the smaller",
     "causes": [
      "length"
     ],
     "fix": "Consider adding a note about the length being long, and recommending sizing down if between sizes."
    },
    {
     "text": "Great dress for a Black Tie Optional event I ordered the 12L and 12R as I wasn't sure which would fit best with 5\" heels.  The 12R fit more snug and definitely wasn't long enough.  The 12L, fit perfect though was a little too long.  I ended up taping the hem up so it didn't drag. I did receive many compliments!",
     "fit": "small",
     "quote": "fit more snug",
     "causes": [
      "length"
     ],
     "fix": "Consider adding a note about the dress running slightly small, especially for those who prefer a looser fit."
    }
   ]
  },
  {
   "item": "1226293",
   "category": "shift",
   "n_reviews": 575,
   "sampled": 60,
   "true_small": 0.2956521739130435,
   "true_large": 0.04521739130434783,
   "pred_small": 0.4,
   "pred_large": 0.1,
   "kw_small": 0.25,
   "kw_large": 0.05,
   "causes": {
    "length": 0.3,
    "fabric_quality": 0.21666666666666667,
    "style_vs_photo": 0.1,
    "comfort": 0.08333333333333333,
    "other": 0.016666666666666666
   },
   "report": {
    "size_note": "Runs small: most customers size up one or two.",
    "listing_fix": "This dress fits closely. Consider sizing up for a more comfortable fit, especially if you prefer a looser style or have a larger bust or hips.",
    "photo_to_add": "Photo of the dress on a model with measurements for bust, waist, and hips.",
    "headline": "Small fit, size up recommended"
   },
   "examples": [
    {
     "text": "Didn't end up wearing it. I should have sized up instead of down.  Was very short and tight.",
     "fit": "small",
     "quote": "I should have sized up instead of down",
     "causes": [
      "length",
      "comfort"
     ],
     "fix": "Consider adding a note to size up, as this garment may run short and tight."
    },
    {
     "text": "beautiful detail  shorter and more fitted than I expected. still fit the bill for a cute fun pre-wedding party dress",
     "fit": "small",
     "quote": "shorter and more fitted than I expected",
     "causes": [
      "length"
     ],
     "fix": "Consider adding a note about the dress running shorter and more fitted than expected."
    },
    {
     "text": "Fun dress for my friend's birthday!  The sleeves were slightly tight, but the rest of the dress was loose and comfortable.",
     "fit": "small",
     "quote": "sleeves were slightly tight",
     "causes": [
      "length"
     ],
     "fix": "Consider mentioning that the sleeves may run slightly tight for some customers."
    },
    {
     "text": "Showstopper Everyone adored this dress. It fit so nicely, ran a little big so get a size smaller and that should be perfect.",
     "fit": "large",
     "quote": "ran a little big",
     "causes": [],
     "fix": "Consider suggesting customers size down for a more fitted look."
    }
   ]
  },
  {
   "item": "123373",
   "category": "gown",
   "n_reviews": 679,
   "sampled": 60,
   "true_small": 0.10751104565537556,
   "true_large": 0.06774668630338733,
   "pred_small": 0.13333333333333333,
   "pred_large": 0.2,
   "kw_small": 0.08333333333333333,
   "kw_large": 0.05,
   "causes": {
    "length": 0.45,
    "fabric_quality": 0.11666666666666667,
    "style_vs_photo": 0.05,
    "zipper_or_closure": 0.05,
    "other": 0.03333333333333333,
    "comfort": 0.03333333333333333,
    "colour_vs_photo": 0.03333333333333333
   },
   "report": {
    "size_note": "Runs large: consider sizing down.",
    "listing_fix": "This style is cut generously. Many customers found it to be larger than expected, especially in the shoulders and chest.",
    "photo_to_add": "Photo with measurements of chest, waist, and length laid flat.",
    "headline": "Larger than expected sizing"
   },
   "examples": [
    {
     "text": "Everyone said it was the best looking at the affair. Zipper is in back, need help with it.  Runs a bit small.",
     "fit": "small",
     "quote": "Runs a bit small",
     "causes": [
      "zipper_or_closure"
     ],
     "fix": "Consider sizing up for a more comfortable fit, especially if you prefer a looser style."
    },
    {
     "text": "Pretty dress, sad it was so short.  Ordered a 6L, but this dress was WAY too short. I'm 5'6 and without heels it was barely ankle length.",
     "fit": "large",
     "quote": "WAY too short",
     "causes": [
      "length"
     ],
     "fix": "Consider adding a note about the dress's shorter length, especially for taller customers."
    },
    {
     "text": "Very classy dress. This was a classy simple dress but accessories are definitely needed. It is very plain and the slit only came to my knee. Could have used the 0P.",
     "fit": "large",
     "quote": "Could have used the 0P",
     "causes": [
      "length"
     ],
     "fix": "Consider adding a note about the slit length being shorter than expected."
    },
    {
     "text": "Dress was too short.  The dress was too short for me and I ordered the 4L. I was disappointed in the condition I got the dress in. It was a bit uncomfortable but the slit in the dress is sexy.",
     "fit": "large",
     "quote": "ordered the 4L",
     "causes": [
      "length",
      "comfort"
     ],
     "fix": "Consider adding a note about the dress running large and potentially recommending customers size down."
    }
   ]
  },
  {
   "item": "124553",
   "category": "dress",
   "n_reviews": 488,
   "sampled": 60,
   "true_small": 0.04918032786885246,
   "true_large": 0.38729508196721313,
   "pred_small": 0.15,
   "pred_large": 0.3,
   "kw_small": 0.15,
   "kw_large": 0.23333333333333334,
   "causes": {
    "length": 0.2,
    "fabric_quality": 0.11666666666666667,
    "zipper_or_closure": 0.05,
    "colour_vs_photo": 0.03333333333333333,
    "style_vs_photo": 0.03333333333333333,
    "comfort": 0.03333333333333333,
    "other": 0.03333333333333333
   },
   "report": {
    "size_note": "Runs large: consider sizing down one size.",
    "listing_fix": "This dress tends to run larger than expected. Please refer to the size chart and consider ordering one size smaller for a more accurate fit.",
    "photo_to_add": "Size chart with measurements for bust, waist, and hips.",
    "headline": "Size inconsistent; runs large"
   },
   "examples": [
    {
     "text": "Easy to wear and eye-catching A little baggy on the waist. Nice to have zippers on the sleeves.",
     "fit": "large",
     "quote": "a little baggy on the waist",
     "causes": [
      "length"
     ],
     "fix": "Consider mentioning that the garment may run a bit loose around the waist."
    },
    {
     "text": "Compliments! So many compliments. The dress runs large, so size down for sure. Perfect for a fall wedding.",
     "fit": "large",
     "quote": "The dress runs large",
     "causes": [],
     "fix": "Consider adding a note to size down for a more accurate fit."
    },
    {
     "text": "Eye catching dress! Beautiful dress! Got it for my Rehearsal Dinner and got so many compliments. It is very soft and comfortable. Runs a bit large so get a size down just in case.",
     "fit": "large",
     "quote": "Runs a bit large",
     "causes": [],
     "fix": "Consider ordering a size down for a more fitted look."
    },
    {
     "text": "The quality of the dress. I wore the 4 but could have worn the 6 as well, it was just looser in the body. Beautiful dress! Wore it as a prom chaperone. It was adult and teenager approved.",
     "fit": "large",
     "quote": "could have worn the 6",
     "causes": [
      "fabric_quality"
     ],
     "fix": "Consider suggesting customers size down if they prefer a more fitted look."
    }
   ]
  },
  {
   "item": "125424",
   "category": "dress",
   "n_reviews": 461,
   "sampled": 60,
   "true_small": 0.03470715835140998,
   "true_large": 0.3275488069414317,
   "pred_small": 0.21666666666666667,
   "pred_large": 0.2,
   "kw_small": 0.11666666666666667,
   "kw_large": 0.1,
   "causes": {
    "length": 0.2,
    "fabric_quality": 0.1,
    "comfort": 0.08333333333333333,
    "zipper_or_closure": 0.05,
    "other": 0.03333333333333333,
    "style_vs_photo": 0.03333333333333333,
    "colour_vs_photo": 0.03333333333333333
   },
   "report": {
    "size_note": "Runs small, especially in the shoulders and chest; consider sizing up.",
    "listing_fix": "Many customers found this item runs small, particularly in the shoulder and chest areas. We recommend checking the size chart carefully and considering sizing up for a more comfortable fit.",
    "photo_to_add": "Size chart with bust and shoulder measurements clearly labeled.",
    "headline": "Inconsistent sizing, small shoulders"
   },
   "examples": [
    {
     "text": "awkward fit too loose thru the midsection and arms and was a really awkward fit for me so I didn't end up wearing it.",
     "fit": "large",
     "quote": "too loose thru the midsection",
     "causes": [
      "style_vs_photo"
     ],
     "fix": "Consider mentioning the relaxed fit and suggesting it may be best for those who prefer a looser style."
    },
    {
     "text": "Pretty white winter dress Beware it is pretty sheer and really tight around the middle, but would be great if you had toned abs.",
     "fit": "small",
     "quote": "really tight around the middle",
     "causes": [
      "fabric_quality"
     ],
     "fix": "Consider adding a note about the dress being fitted and potentially running small in the midsection."
    },
    {
     "text": "Great dress for engagement pictures! It was a super comfortable dress and perfect for engagement pictures. I ordered a 8 and 10 and ended up wearing the 10.",
     "fit": "large",
     "quote": "ended up wearing the 10",
     "causes": [],
     "fix": "Consider mentioning that the dress may run slightly large, and customers might prefer to size down."
    },
    {
     "text": "Charity gala I have super broad shoulders and a bit of a bust so it was a little tight up top, but other than that it was wonderful! Very elegant yet modern.",
     "fit": "small",
     "quote": "a little tight up top",
     "causes": [
      "comfort"
     ],
     "fix": "Consider suggesting customers with broader shoulders or a larger bust size up."
    }
   ]
  },
  {
   "item": "126335",
   "category": "dress",
   "n_reviews": 2233,
   "sampled": 60,
   "true_small": 0.047021943573667714,
   "true_large": 0.20420958351992835,
   "pred_small": 0.16666666666666666,
   "pred_large": 0.2833333333333333,
   "kw_small": 0.16666666666666666,
   "kw_large": 0.13333333333333333,
   "causes": {
    "zipper_or_closure": 0.13333333333333333,
    "fabric_quality": 0.13333333333333333,
    "colour_vs_photo": 0.08333333333333333,
    "other": 0.08333333333333333,
    "length": 0.08333333333333333,
    "style_vs_photo": 0.06666666666666667,
    "comfort": 0.06666666666666667
   },
   "report": {
    "size_note": "Runs large: consider sizing down.",
    "listing_fix": "Many customers found this item to be larger than expected, particularly in the bust and shoulders. We recommend checking the size chart carefully and considering sizing down for a more fitted feel.",
    "photo_to_add": "Size chart with bust and shoulder measurements clearly labeled.",
    "headline": "Larger fit, especially in the bust"
   },
   "examples": [
    {
     "text": "So comfortable yet sexy! I normally wear an 8 but wore the 10 to accommodate my bust. So fun to dance and and got compliments all night!",
     "fit": "large",
     "quote": "wore the 10 to accommodate my bust",
     "causes": [],
     "fix": "Consider recommending customers with a larger bust size up."
    },
    {
     "text": "Beautiful, fun dress!  Zipper sticks a bit but great dress! Had to pin top a little at bust line for when I bent over but loved it and was very comfortable.",
     "fit": "small",
     "quote": "Had to pin top a little at bust line",
     "causes": [
      "zipper_or_closure"
     ],
     "fix": "Consider adding a hook and eye closure or adjusting the zipper for smoother operation."
    },
    {
     "text": "The event was great, it was NYE! Dress from RTR was too large and very worn looking Didn't fit me well so I returned and had to go buy a dress for NYE last year.",
     "fit": "large",
     "quote": "too large",
     "causes": [
      "fabric_quality"
     ],
     "fix": "Consider noting that the dress may run large, especially for those with a smaller frame."
    },
    {
     "text": "fabulous  dress. got so many compliments. great dress! all of the reviews were so true. very comfortable. runs a little big up top, needed to buy a great lift bra",
     "fit": "large",
     "quote": "runs a little big up top",
     "causes": [],
     "fix": "Consider mentioning that the dress may run large in the upper body."
    }
   ]
  },
  {
   "item": "128730",
   "category": "dress",
   "n_reviews": 331,
   "sampled": 60,
   "true_small": 0.13293051359516617,
   "true_large": 0.045317220543806644,
   "pred_small": 0.25,
   "pred_large": 0.13333333333333333,
   "kw_small": 0.23333333333333334,
   "kw_large": 0.08333333333333333,
   "causes": {
    "length": 0.21666666666666667,
    "comfort": 0.11666666666666667,
    "style_vs_photo": 0.1,
    "colour_vs_photo": 0.05,
    "fabric_quality": 0.03333333333333333,
    "other": 0.016666666666666666
   },
   "report": {
    "size_note": "Runs small: most customers size up one",
    "listing_fix": "Sizing runs smaller than usual. Consider ordering one size larger than your typical size for a more comfortable fit, especially in the chest area.",
    "photo_to_add": "Photo with measurements of chest and length.",
    "headline": "Small fit, size up recommended"
   },
   "examples": [
    {
     "text": "Didn't end up wearing it since it was not flattering.  Tight, body-hugging fit. Would recommend going up a size if you have curves.",
     "fit": "small",
     "quote": "Tight, body-hugging fit",
     "causes": [
      "style_vs_photo"
     ],
     "fix": "Consider adding a note about the garment's fit being close and recommending sizing up for those with curves."
    },
    {
     "text": "Great dress! Really comfortable and got a lot of compliments.  Fit well and true to size, a bit baggy in the armpits but otherwise great!",
     "fit": "large",
     "quote": "a bit baggy in the armpits",
     "causes": [
      "length"
     ],
     "fix": "Consider mentioning the dress may run slightly large in the armpit area."
    },
    {
     "text": "Halloween wedding Loved the color of the dress but the arms were a bit tight. I have a larger bust and this dress did not work well with that because it is very low cut.",
     "fit": "small",
     "quote": "the arms were a bit tight",
     "causes": [
      "comfort"
     ],
     "fix": "Consider adding a note about the dress fitting snugly in the arms, especially for those with a larger bust."
    },
    {
     "text": "Amazing color. Classy but sexy.  Wore this for Grammy Awards weekend and got a lot of compliments.  Amazing color and hugged my curves perfectly.  I wore a body slimmer under as always!",
     "fit": "small",
     "quote": "Wore a body slimmer under as always!",
     "causes": [
      "comfort"
     ],
     "fix": "Consider mentioning that the garment may fit snugly and layering may be desired."
    }
   ]
  },
  {
   "item": "130259",
   "category": "dress",
   "n_reviews": 912,
   "sampled": 60,
   "true_small": 0.05921052631578947,
   "true_large": 0.23684210526315788,
   "pred_small": 0.15,
   "pred_large": 0.18333333333333332,
   "kw_small": 0.11666666666666667,
   "kw_large": 0.11666666666666667,
   "causes": {
    "zipper_or_closure": 0.26666666666666666,
    "comfort": 0.11666666666666667,
    "length": 0.08333333333333333,
    "style_vs_photo": 0.06666666666666667,
    "other": 0.06666666666666667,
    "colour_vs_photo": 0.05,
    "fabric_quality": 0.05
   },
   "report": {
    "size_note": "Runs large in the bust; consider sizing down.",
    "listing_fix": "The top portion of this item fits larger than the bottom. Customers report needing to size down for a better fit, especially in the bust area.",
    "photo_to_add": "Photo showing bust measurement across the garment laid flat.",
    "headline": "Bust fit is often too large"
   },
   "examples": [
    {
     "text": "Just ok A bit slouchy and not nearly as classic as I had hoped",
     "fit": "large",
     "quote": "A bit slouchy",
     "causes": [
      "style_vs_photo"
     ],
     "fix": "Consider mentioning the relaxed or slouchy fit in the description."
    },
    {
     "text": "Gorgeous dress, lots of compliments It's great if you're curvy, but it does tend to hug your butt and gap a little funny.",
     "fit": "small",
     "quote": "gap a little funny",
     "causes": [
      "zipper_or_closure"
     ],
     "fix": "Consider adding a note about potential gapping for those with curvier hips and suggesting shapewear or tailoring."
    },
    {
     "text": "Fun party dress, I felt pretty! The dress was a bit big up top and pretty low cut. It was flattering and very comfortable. I recommend this dress.",
     "fit": "large",
     "quote": "a bit big up top",
     "causes": [
      "colour_vs_photo"
     ],
     "fix": "Consider mentioning that the dress may run slightly large in the bust."
    },
    {
     "text": "Absolutely fabulous dress!!!! I had sooo many compliments all night long!!!  A little low cut. Definitely comfy in the hips. So many sequins- and they catch on things! Sequins made it a little hard to zip up. But definitely a great dress!!",
     "fit": "small",
     "quote": "a little hard to zip up",
     "causes": [
      "zipper_or_closure",
      "other"
     ],
     "fix": "Consider adding a zipper assist or suggesting customers wear a strapless bra for a smoother fit."
    }
   ]
  },
  {
   "item": "130727",
   "category": "dress",
   "n_reviews": 429,
   "sampled": 60,
   "true_small": 0.09557109557109557,
   "true_large": 0.13986013986013987,
   "pred_small": 0.23333333333333334,
   "pred_large": 0.13333333333333333,
   "kw_small": 0.16666666666666666,
   "kw_large": 0.15,
   "causes": {
    "zipper_or_closure": 0.2833333333333333,
    "comfort": 0.15,
    "length": 0.13333333333333333,
    "other": 0.1,
    "fabric_quality": 0.08333333333333333,
    "style_vs_photo": 0.05
   },
   "report": {
    "size_note": "Runs small: many customers report difficulty zipping and a snug fit.",
    "listing_fix": "This dress tends to run small, especially around the bust and ribcage. We recommend sizing up for a more comfortable fit.",
    "photo_to_add": "Photo of the dress being zipped up on a model with measurements of bust, waist, and ribcage.",
    "headline": "Snug fit, zipper issues, size up"
   },
   "examples": [
    {
     "text": "Was a great cocktail dress - not too dressy, but sparkly enough to wear to a nighttime event Gorgeous dress. Definitely runs large, so size down.",
     "fit": "large",
     "quote": "Definitely runs large",
     "causes": [],
     "fix": "Consider suggesting customers size down for a more accurate fit."
    },
    {
     "text": "Did not fit a 36d! I was so disappointed in the dress I would not get the chest to zip. I am only a 36d and it literally wouldn't zip around my bust. So sad!",
     "fit": "small",
     "quote": "literally wouldn't zip around my bust",
     "causes": [
      "zipper_or_closure"
     ],
     "fix": "Consider adding a note about the dress running small, especially in the bust area, and recommending customers size up."
    },
    {
     "text": "Fast and easy! Fit was a tad snug in the waste on the 14, but the top on the 16 was waaaayyy too big. I got lots of compliments throughout the night! The sequins were a tad uncomfortable, but nothing I couldn't handle! Overall very happy with my first RTR experience.",
     "fit": "small",
     "quote": "a tad snug in the waste on the 14",
     "causes": [
      "comfort"
     ],
     "fix": "Consider suggesting customers check the waist measurements carefully, as this style may run slightly snug."
    },
    {
     "text": "I didn't get to wear it :-( Dress is beautiful.  It runs small in the bust.  The dress does pucker a bit at the waist making it appear as though you have a baby bump.  I would recommend for those in their early pregnancy.  Unfortunately I didn't wear the dress - for my event it was way too small.",
     "fit": "small",
     "quote": "It runs small in the bust",
     "causes": [
      "style_vs_photo"
     ],
     "fix": "Consider adding a note to the listing that the dress runs small, especially in the bust area."
    }
   ]
  },
  {
   "item": "131533",
   "category": "gown",
   "n_reviews": 1084,
   "sampled": 60,
   "true_small": 0.06457564575645756,
   "true_large": 0.04428044280442804,
   "pred_small": 0.2,
   "pred_large": 0.15,
   "kw_small": 0.15,
   "kw_large": 0.03333333333333333,
   "causes": {
    "length": 0.2833333333333333,
    "zipper_or_closure": 0.1,
    "comfort": 0.08333333333333333,
    "style_vs_photo": 0.03333333333333333,
    "other": 0.016666666666666666
   },
   "report": {
    "size_note": "Runs small: many customers found it tight in the chest, shoulders, and neck.",
    "listing_fix": "This style tends to run small, especially in the chest and shoulders. Consider sizing up for a more comfortable fit, particularly if you have a larger bust or broader shoulders.",
    "photo_to_add": "Photo of the garment being worn, showing the fit across the chest and shoulders on a model with a similar build to the target customer.",
    "headline": "Small fit, chest and shoulder tightness"
   },
   "examples": [
    {
     "text": "Wore for prom junior year. Beautiful color and material was incredible.  The top fits a little tight.",
     "fit": "small",
     "quote": "fits a little tight",
     "causes": [
      "comfort"
     ],
     "fix": "Consider suggesting customers size up if they prefer a more relaxed fit."
    },
    {
     "text": "Tight in Ribs I'm usually a size 4 in most dresses, however I wasn't able to zip the size 4 when it got to my upper rib area.",
     "fit": "small",
     "quote": "wasn't able to zip the size 4",
     "causes": [],
     "fix": "Consider suggesting customers size up if they are sensitive in the rib area."
    },
    {
     "text": "Dress was perfect for my formal dinner and was really comfortable. I usually wear an 8 but went up a size due to my chest size. I the dress was comfortable and light weight. I was very happy over all with the fit and length.",
     "fit": "small",
     "quote": "went up a size due to my chest size",
     "causes": [],
     "fix": "Consider recommending customers with a larger bust size to size up."
    },
    {
     "text": "I find that if you have a full bust this dress makes you look fat. I rented two different dresses for this occasion and did not wear this one.  It's pretty but would look better on someone with a smaller bust.  I'm a 34C and it made me look fat.",
     "fit": "small",
     "quote": "would look better on someone with a smaller bust",
     "causes": [
      "style_vs_photo"
     ],
     "fix": "Consider adding a note about the dress's fit on those with a larger bust, as it may not be flattering for all body types."
    }
   ]
  },
  {
   "item": "131698",
   "category": "gown",
   "n_reviews": 368,
   "sampled": 60,
   "true_small": 0.13043478260869565,
   "true_large": 0.06793478260869565,
   "pred_small": 0.35,
   "pred_large": 0.05,
   "kw_small": 0.23333333333333334,
   "kw_large": 0.03333333333333333,
   "causes": {
    "length": 0.3,
    "comfort": 0.11666666666666667,
    "zipper_or_closure": 0.11666666666666667,
    "fabric_quality": 0.06666666666666667,
    "colour_vs_photo": 0.016666666666666666,
    "other": 0.016666666666666666,
    "style_vs_photo": 0.016666666666666666
   },
   "report": {
    "size_note": "Runs small: most customers size up one",
    "listing_fix": "This item has a fitted style. Consider sizing up, especially if you prefer a more relaxed fit or have a larger bust.",
    "photo_to_add": "Photo showing garment measurements laid flat, including bust and length.",
    "headline": "Small fit, bust tightness reported"
   },
   "examples": [
    {
     "text": "stunner! Beautiful quality, pretty tight but hugs curves well. 100% recommend!",
     "fit": "small",
     "quote": "pretty tight",
     "causes": [],
     "fix": "Consider suggesting customers who prefer a more relaxed fit size up."
    },
    {
     "text": "A lot of compliments on this dress! I am 5' 4\" and 118 lbs.  Fit was a little tight around the bust.   I could not zip it all the way up comfortably.",
     "fit": "small",
     "quote": "a little tight around the bust",
     "causes": [
      "zipper_or_closure"
     ],
     "fix": "Consider recommending that customers size up if they are busty."
    },
    {
     "text": "i rented this dress for prom and absolutely loved it and it fit my curves all in the right place  it was just a little big on top but other then that it was absolutely perfect",
     "fit": "large",
     "quote": "a little big on top",
     "causes": [],
     "fix": "Consider mentioning that the dress may run slightly large in the bust."
    },
    {
     "text": "danced the night away, can definitely get low in this dress! it rubbed under the arms a little, not good for big boobs, perfect length, great material, wish it was more mermaid",
     "fit": "small",
     "quote": "rubbed under the arms a little",
     "causes": [
      "comfort"
     ],
     "fix": "Consider adding a note about potential armpit rubbing, especially for those with larger busts."
    }
   ]
  },
  {
   "item": "134393",
   "category": "dress",
   "n_reviews": 394,
   "sampled": 60,
   "true_small": 0.15228426395939088,
   "true_large": 0.030456852791878174,
   "pred_small": 0.26666666666666666,
   "pred_large": 0.08333333333333333,
   "kw_small": 0.23333333333333334,
   "kw_large": 0.1,
   "causes": {
    "comfort": 0.11666666666666667,
    "length": 0.11666666666666667,
    "zipper_or_closure": 0.05,
    "colour_vs_photo": 0.03333333333333333,
    "fabric_quality": 0.03333333333333333,
    "style_vs_photo": 0.016666666666666666,
    "other": 0.016666666666666666
   },
   "report": {
    "size_note": "Runs small: most customers size up one",
    "listing_fix": "This style runs smaller than expected. We recommend checking the size chart carefully and considering sizing up for a more comfortable fit, especially around the rib cage.",
    "photo_to_add": "Size chart with measurements for each size.",
    "headline": "Small fit leads to returns"
   },
   "examples": [
    {
     "text": "Was an option for a photo shoot for holidays.  Very difficult to zip up over the hem in the middle of the back. Need an extra set of hands to help zip up.",
     "fit": "small",
     "quote": "Very difficult to zip up",
     "causes": [
      "zipper_or_closure"
     ],
     "fix": "Consider suggesting customers size up if they have a wider back or prefer more breathing room."
    },
    {
     "text": "Birthday Party i ended up wearing a 6 although it was tight on the chest because the 8 is too loose and didn't like the way it looked. the dress is very classy and comfortable. good material",
     "fit": "small",
     "quote": "it was tight on the chest",
     "causes": [
      "length"
     ],
     "fix": "Consider suggesting customers size up if they are between sizes or have a larger bust."
    },
    {
     "text": "Loved the colors a little tight up top! I loved the print and colors and got complements all night.  The only downfall, was that it was a little tight on the bust.  It was like that for both the six and the eight.",
     "fit": "small",
     "quote": "a little tight on the bust",
     "causes": [
      "comfort"
     ],
     "fix": "Consider recommending customers size up, especially if they are busty."
    },
    {
     "text": "dress arrived in time  Dress was perfect for a wedding. The 6 I got as a backup fit better but the hem of the dress was messed up so I wore the 4 but it wasn't extremely uncomfortable. Dress shows up very well in pictures.",
     "fit": "small",
     "quote": "The 6 I got as a backup fit better",
     "causes": [
      "length"
     ],
     "fix": "Consider mentioning that the dress may run slightly small, and customers might prefer to size up."
    }
   ]
  },
  {
   "item": "134849",
   "category": "gown",
   "n_reviews": 311,
   "sampled": 60,
   "true_small": 0.03215434083601286,
   "true_large": 0.4212218649517685,
   "pred_small": 0.08333333333333333,
   "pred_large": 0.4666666666666667,
   "kw_small": 0.06666666666666667,
   "kw_large": 0.3333333333333333,
   "causes": {
    "length": 0.36666666666666664,
    "colour_vs_photo": 0.23333333333333334,
    "zipper_or_closure": 0.08333333333333333,
    "comfort": 0.05,
    "fabric_quality": 0.016666666666666666,
    "style_vs_photo": 0.016666666666666666
   },
   "report": {
    "size_note": "Runs large: most customers size down one or two.",
    "listing_fix": "This dress tends to run larger than expected. We recommend checking the size chart carefully and considering sizing down for a better fit.",
    "photo_to_add": "Size chart with measurements for each size.",
    "headline": "Runs large, size down recommended"
   },
   "examples": [
    {
     "text": "Rented as a back up for a Military Ball Wayy too big.",
     "fit": "large",
     "quote": "Wayy too big",
     "causes": [],
     "fix": "Consider suggesting customers size down if they prefer a more fitted look."
    },
    {
     "text": "It's a good quality dress I liked the dress, it was just too big for me. It was my backup dress anyway.",
     "fit": "large",
     "quote": "too big for me",
     "causes": [],
     "fix": "Consider adding a note about the dress running large and recommending customers size down."
    },
    {
     "text": "I wore this dress to my engagement party. It fit really well.  The size down actually fit me better so I wore a 6 instead of an 8.",
     "fit": "large",
     "quote": "The size down actually fit me better",
     "causes": [],
     "fix": "Consider suggesting customers size down for a more accurate fit."
    },
    {
     "text": "Very comfortable, but short! It worked just fine, but it was big in the waist, and just short enough that 4inch heels made it fall at a weird length.",
     "fit": "large",
     "quote": "big in the waist",
     "causes": [
      "length"
     ],
     "fix": "Consider noting that the garment may run large in the waist."
    }
   ]
  },
  {
   "item": "136860",
   "category": "sheath",
   "n_reviews": 703,
   "sampled": 60,
   "true_small": 0.09388335704125178,
   "true_large": 0.034139402560455195,
   "pred_small": 0.3,
   "pred_large": 0.18333333333333332,
   "kw_small": 0.2833333333333333,
   "kw_large": 0.11666666666666667,
   "causes": {
    "fabric_quality": 0.21666666666666667,
    "length": 0.2,
    "comfort": 0.11666666666666667,
    "zipper_or_closure": 0.1,
    "colour_vs_photo": 0.06666666666666667,
    "other": 0.05
   },
   "report": {
    "size_note": "Runs small: most customers size up one.",
    "listing_fix": "This style is fitted through the hips and waist. Consider sizing up for a more comfortable fit, especially if you are between sizes.",
    "photo_to_add": "Photo showing the garment on a model with measurements for bust, waist, and hips.",
    "headline": "Small fit, sizing up recommended"
   },
   "examples": [
    {
     "text": "The blue color and the lace  It was a little large in the bust but not anything really noticeable",
     "fit": "large",
     "quote": "a little large in the bust",
     "causes": [],
     "fix": "Consider mentioning that the garment may run slightly large in the bust."
    },
    {
     "text": "Really striking color.  Tight at the waist.  One dress had poor seam at the hem so could only wear one that arrived.  Great customer service though!",
     "fit": "small",
     "quote": "Tight at the waist",
     "causes": [
      "fabric_quality"
     ],
     "fix": "Consider adding that the dress fits snugly at the waist, and customers may want to size up."
    },
    {
     "text": "got compliments on this dress all night long. the blue lace is beautiful! tight across the chest, on the longer side and hits at the knee. the color doesn't do the blue justice. its an absolutely amazing dress!!",
     "fit": "small",
     "quote": "tight across the chest",
     "causes": [
      "length",
      "colour_vs_photo"
     ],
     "fix": "Consider suggesting customers size up if they are busty."
    },
    {
     "text": "Elegant & Fun Vibrant color, soft fabric (not itchy at all!), nicely lined. Fits well, a little large in the bust (I'm 32B). Comfortable to wear, form fitting, so I needed help getting into/out of a low seated car.",
     "fit": "large",
     "quote": "a little large in the bust",
     "causes": [
      "comfort"
     ],
     "fix": "Consider mentioning that the garment may run slightly large, especially in the bust."
    }
   ]
  },
  {
   "item": "1378631",
   "category": "maxi",
   "n_reviews": 330,
   "sampled": 60,
   "true_small": 0.06060606060606061,
   "true_large": 0.024242424242424242,
   "pred_small": 0.26666666666666666,
   "pred_large": 0.05,
   "kw_small": 0.21666666666666667,
   "kw_large": 0.016666666666666666,
   "causes": {
    "length": 0.4166666666666667,
    "comfort": 0.06666666666666667,
    "zipper_or_closure": 0.06666666666666667,
    "colour_vs_photo": 0.05
   },
   "report": {
    "size_note": "Runs small: most customers size up one or two.",
    "listing_fix": "This item runs smaller than expected, especially around the waist and chest. We recommend checking the size chart carefully and considering sizing up for a more comfortable fit.",
    "photo_to_add": "Size chart with measurements for bust, waist, and length.",
    "headline": "Small fit, sizing issues reported"
   },
   "examples": [
    {
     "text": "Tons of compliments, although it is tight at the top around the waist! Awesome dress! So many compliments I couldn't even count. Although the band is very tight, not too uncomfortable though.",
     "fit": "small",
     "quote": "very tight at the top around the waist",
     "causes": [
      "comfort"
     ],
     "fix": "Consider suggesting customers size up if they prefer a more relaxed fit around the waist."
    },
    {
     "text": "Gorgeous dress!!! If you're looking for elegant but beachy, this is it. The waist is extremely narrow.  I should have gone up 2 sizes from what I normally wear. I ordered a 2 and needed a 6 for it to fit.",
     "fit": "small",
     "quote": "I should have gone up 2 sizes from what I normally wear",
     "causes": [],
     "fix": "Consider suggesting customers size up, as the waist runs narrow."
    },
    {
     "text": "Too small :(  Unfortunately the dress didn't fit - would not zip over my chest but fit great everywhere else.  I am an F cup.  I would say anyone with a slightly large chest should be fine and consider it true to size.",
     "fit": "small",
     "quote": "would not zip over my chest",
     "causes": [
      "zipper_or_closure"
     ],
     "fix": "Consider sizing up, especially if you have a larger bust."
    },
    {
     "text": "The colors of this dress are incredible!  The model photo doesn't do it justice! The fit was slightly snug around the rib cage but layed beautifully across the chest and shoulders.  I felt beautiful in it.  Perfect for a beach wedding!",
     "fit": "small",
     "quote": "slightly snug around the rib cage",
     "causes": [
      "colour_vs_photo"
     ],
     "fix": "Consider mentioning the dress fits snugly around the rib cage, and customers may want to size up for a more comfortable fit."
    }
   ]
  },
  {
   "item": "138431",
   "category": "gown",
   "n_reviews": 484,
   "sampled": 60,
   "true_small": 0.1797520661157025,
   "true_large": 0.012396694214876033,
   "pred_small": 0.35,
   "pred_large": 0.05,
   "kw_small": 0.3333333333333333,
   "kw_large": 0.016666666666666666,
   "causes": {
    "length": 0.3333333333333333,
    "zipper_or_closure": 0.15,
    "comfort": 0.1,
    "colour_vs_photo": 0.03333333333333333,
    "fabric_quality": 0.03333333333333333,
    "other": 0.03333333333333333
   },
   "report": {
    "size_note": "Runs small: most customers size up one",
    "listing_fix": "This style runs smaller than expected, especially in the bust and arm areas. We recommend sizing up for a more comfortable fit.",
    "photo_to_add": "Photo of model zipping up the garment, showing ease of movement.",
    "headline": "Small fit, bust and arm tightness"
   },
   "examples": [
    {
     "text": "Great color! I ordered the 6R and 8R and the 8R fit great! A little small in the arms, but that was expected. Color looks great too!",
     "fit": "small",
     "quote": "A little small in the arms",
     "causes": [
      "length"
     ],
     "fix": "Consider mentioning that the garment may run slightly small, especially in the arms."
    },
    {
     "text": "I wore this to officiate a black tie wedding - it was perfect! Great color, and incredibly flattering.  A bit tight around the bust, but I'm a 34C/D and it fit well.",
     "fit": "small",
     "quote": "A bit tight around the bust",
     "causes": [
      "length"
     ],
     "fix": "Consider adding a note about the garment fitting snugly in the bust, especially for those with a larger bust size."
    },
    {
     "text": "Gorgeous color, and the heavy fabric was perfect for an outdoor evening wedding. The length on this dress was great -- I wore it with 1/2 inch - 1 inch sandals, and I'm a bit on the tall side. The bust fit nicely and the waist was snug but comfortable. I tried the 10 as well, but the 8 just looked better.",
     "fit": "small",
     "quote": "the 8 just looked better",
     "causes": [
      "length"
     ],
     "fix": "Consider suggesting customers try sizing down if they are between sizes."
    },
    {
     "text": "Looked great, wish it fit!!! This was my first sizing choice, my second was a 14L - I have a large ribcage and large bust, so the 12L fit perfectly everywhere except in the bust, and there is absolutely NO give in the fabric... If the 14 was available, I believe this dress would've fit perfectly, it was a gorgeous dress!",
     "fit": "small",
     "quote": "If the 14 was available, I believe this dress would've fit perfectly",
     "causes": [
      "fabric_quality"
     ],
     "fix": "Consider adding that the dress has no give in the fabric and customers with larger busts may need to size up."
    }
   ]
  },
  {
   "item": "139086",
   "category": "gown",
   "n_reviews": 519,
   "sampled": 60,
   "true_small": 0.01348747591522158,
   "true_large": 0.3468208092485549,
   "pred_small": 0.15,
   "pred_large": 0.4166666666666667,
   "kw_small": 0.05,
   "kw_large": 0.2,
   "causes": {
    "length": 0.36666666666666664,
    "comfort": 0.08333333333333333,
    "style_vs_photo": 0.05,
    "fabric_quality": 0.05,
    "zipper_or_closure": 0.03333333333333333,
    "other": 0.016666666666666666
   },
   "report": {
    "size_note": "Runs large: consider sizing down one size.",
    "listing_fix": "Many customers found this item to be larger than expected, particularly in the chest and torso. We recommend checking the size chart carefully and considering sizing down for a more fitted feel.",
    "photo_to_add": "Size chart with measurements for chest, waist, and length.",
    "headline": "Size inconsistent; runs large"
   },
   "examples": [
    {
     "text": "Length is a bit short. I'm 5'5\" and needed the 4L with heels.  Overall, beautiful dress!",
     "fit": "large",
     "quote": "needed the 4L",
     "causes": [
      "length"
     ],
     "fix": "Consider noting that the dress may run large, especially for those of average height."
    },
    {
     "text": "Way too big This dress is beautiful, but it literally sagged on me. Order this dress two sizes down.",
     "fit": "large",
     "quote": "Way too big",
     "causes": [
      "style_vs_photo"
     ],
     "fix": "Consider ordering two sizes down as this dress tends to run large."
    },
    {
     "text": "Bold for the ball! The dress was beautiful, but isn't forgiving. Wear spanx if you have any trouble spots that you want to conceal.",
     "fit": "small",
     "quote": "isn't forgiving",
     "causes": [
      "comfort"
     ],
     "fix": "Consider adding a note about the dress's fit and recommending shapewear for a more comfortable and flattering look."
    },
    {
     "text": "Amazing dress! I wore it to my military ball and I got so many compliments.  RUNS LARGE. I probably wear a size 8-10 dress and I wore the 6 in this.",
     "fit": "large",
     "quote": "RUNS LARGE",
     "causes": [],
     "fix": "Consider suggesting customers size down, as this dress appears to run large."
    }
   ]
  },
  {
   "item": "141688",
   "category": "gown",
   "n_reviews": 395,
   "sampled": 60,
   "true_small": 0.09367088607594937,
   "true_large": 0.07341772151898734,
   "pred_small": 0.25,
   "pred_large": 0.13333333333333333,
   "kw_small": 0.21666666666666667,
   "kw_large": 0.13333333333333333,
   "causes": {
    "length": 0.3333333333333333,
    "fabric_quality": 0.18333333333333332,
    "zipper_or_closure": 0.11666666666666667,
    "comfort": 0.05,
    "other": 0.05,
    "colour_vs_photo": 0.03333333333333333,
    "style_vs_photo": 0.016666666666666666
   },
   "report": {
    "size_note": "Runs small: most customers size up one.",
    "listing_fix": "This style tends to run small, especially in the bust and shoulders. We recommend checking the size chart carefully and considering sizing up for a more comfortable fit.",
    "photo_to_add": "Size chart with bust and shoulder measurements.",
    "headline": "Small fit, sizing issues reported"
   },
   "examples": [
    {
     "text": "Dancing The tall size would have fit better and allowed for heels but the dress was gorgeous and I was comfortable all night! Highly recommended.",
     "fit": "small",
     "quote": "The tall size would have fit better",
     "causes": [],
     "fix": "Consider noting that the dress may run slightly short, especially for taller customers."
    },
    {
     "text": "I loved this dress.  Very comfortable and easy to move in.  Highly recommend! Great formal dress!!!  The dress was a smidge tight but the underlayer/lining makes it easy to move in.  I would definitely rent again!",
     "fit": "small",
     "quote": "a smidge tight",
     "causes": [],
     "fix": "Consider suggesting customers rent a size up for a more comfortable fit."
    },
    {
     "text": "LOVE IT!!! I wore this dress for my nieces sweet 16... it was very comfortable ... no complains. I fit into a 4R but i am a 36D so the top was a bit tight and chose the 6R the length was PERFECT as well - LOVED LOVED",
     "fit": "small",
     "quote": "the top was a bit tight",
     "causes": [
      "length"
     ],
     "fix": "Consider recommending that customers with a larger bust size size up."
    },
    {
     "text": "Pretty sparkles that photograph well Itchy sequins in armpit area. High quality design sequins did not fall off. Tight in bust area, had to take size 4 instead of ordered size of 2. 5'7'' wore the regular length with flats and people stepped on the back of the dress often.",
     "fit": "small",
     "quote": "Tight in bust area, had to take size 4 instead of ordered size of 2",
     "causes": [
      "fabric_quality",
      "length"
     ],
     "fix": "Consider recommending customers size up, especially if they are busty."
    }
   ]
  },
  {
   "item": "142179",
   "category": "gown",
   "n_reviews": 424,
   "sampled": 60,
   "true_small": 0.09433962264150944,
   "true_large": 0.05660377358490566,
   "pred_small": 0.36666666666666664,
   "pred_large": 0.15,
   "kw_small": 0.16666666666666666,
   "kw_large": 0.0,
   "causes": {
    "length": 0.3333333333333333,
    "zipper_or_closure": 0.16666666666666666,
    "comfort": 0.1,
    "other": 0.05,
    "style_vs_photo": 0.05,
    "fabric_quality": 0.05
   },
   "report": {
    "size_note": "Runs small: most customers size up one",
    "listing_fix": "This item runs smaller than expected, especially in the arms and chest. Consider sizing up for a more comfortable fit, particularly if you have broader shoulders or prefer more room to move.",
    "photo_to_add": "Photo of someone zipping the garment up, showing arm movement.",
    "headline": "Small sizing, arm tightness, length issues"
   },
   "examples": [
    {
     "text": "The event. I really needed a size 16, however, I pulled it off with the 14.",
     "fit": "large",
     "quote": "pulled it off with the 14",
     "causes": [],
     "fix": "Consider suggesting customers size down if they are between sizes."
    },
    {
     "text": "Was too small for me to wear.  After I tried it on, the snap broke. I decided it was too risky to try and wear it.",
     "fit": "small",
     "quote": "Was too small for me to wear",
     "causes": [
      "zipper_or_closure"
     ],
     "fix": "Consider suggesting customers size up if they prefer a more relaxed fit."
    },
    {
     "text": "Stunning dress.  Size 2 would have been a better fit for me. overall, the dress looked beautiful and I had many compliments.",
     "fit": "large",
     "quote": "Size 2 would have been a better fit for me",
     "causes": [],
     "fix": "Consider suggesting customers size down if they prefer a more fitted look."
    },
    {
     "text": "I received many compliments on the dress, it was very beautiful.   The fit on the dress itself was nice the arms seemed a bit small.",
     "fit": "small",
     "quote": "the arms seemed a bit small",
     "causes": [
      "length"
     ],
     "fix": "Consider mentioning that the sleeves may run slightly small for some."
    }
   ]
  },
  {
   "item": "144714",
   "category": "gown",
   "n_reviews": 354,
   "sampled": 60,
   "true_small": 0.1864406779661017,
   "true_large": 0.03389830508474576,
   "pred_small": 0.3,
   "pred_large": 0.13333333333333333,
   "kw_small": 0.15,
   "kw_large": 0.06666666666666667,
   "causes": {
    "length": 0.4166666666666667,
    "zipper_or_closure": 0.1,
    "comfort": 0.06666666666666667,
    "other": 0.03333333333333333,
    "fabric_quality": 0.03333333333333333,
    "style_vs_photo": 0.016666666666666666,
    "colour_vs_photo": 0.016666666666666666
   },
   "report": {
    "size_note": "Runs small: most customers size up one.",
    "listing_fix": "The bodice has little stretch, so if you're between sizes, we recommend ordering the larger size. Consider your bust measurement when selecting your size.",
    "photo_to_add": "A photo showing the garment's fit on a model with measurements for bust, waist, and length.",
    "headline": "Small fit, size up recommended"
   },
   "examples": [
    {
     "text": "Great fit. High slit in the leg - and tight bustier.",
     "fit": "small",
     "quote": "tight bustier",
     "causes": [
      "fabric_quality"
     ],
     "fix": "Consider mentioning the bustier is fitted and may be snug for those with a larger bust."
    },
    {
     "text": "it was too tight on the side , bust line  Beautiful gown, i just wish it had fit me",
     "fit": "small",
     "quote": "too tight on the side",
     "causes": [
      "comfort"
     ],
     "fix": "Consider suggesting customers size up if they have a wider build."
    },
    {
     "text": "2012-2013 Miss UNCF Huston-Tillotson University  The dress fit me a little big at the top.",
     "fit": "large",
     "quote": "a little big at the top",
     "causes": [],
     "fix": "Consider mentioning that the dress may run slightly large, especially in the upper portion."
    },
    {
     "text": "Military Ball for ROTC\n Good fabric that flows nicely. If you're short definitely try to get the petite dress. Bust runs a little small, I'm a D and had to size up.",
     "fit": "small",
     "quote": "Bust runs a little small",
     "causes": [
      "fabric_quality"
     ],
     "fix": "Consider adding a note about the bust running small and recommending that customers with a larger bust size up."
    }
   ]
  },
  {
   "item": "146684",
   "category": "gown",
   "n_reviews": 492,
   "sampled": 60,
   "true_small": 0.06300813008130081,
   "true_large": 0.07723577235772358,
   "pred_small": 0.2,
   "pred_large": 0.11666666666666667,
   "kw_small": 0.13333333333333333,
   "kw_large": 0.08333333333333333,
   "causes": {
    "length": 0.26666666666666666,
    "comfort": 0.18333333333333332,
    "fabric_quality": 0.11666666666666667,
    "other": 0.06666666666666667,
    "zipper_or_closure": 0.05,
    "style_vs_photo": 0.016666666666666666
   },
   "report": {
    "size_note": "Runs both small and large: check measurements carefully.",
    "listing_fix": "Customers report this item runs differently depending on body type. We recommend comparing your measurements to the size chart provided and considering sizing up or down based on your fit preference.",
    "photo_to_add": "Size chart with measurements for bust, waist, and length.",
    "headline": "Size inconsistency causes returns"
   },
   "examples": [
    {
     "text": "Classic was too large for me but the material is heavy and feels like a real gown on!",
     "fit": "large",
     "quote": "too large for me",
     "causes": [],
     "fix": "Consider suggesting customers check size charts carefully, as this style may run larger than expected."
    },
    {
     "text": "Beautiful gown, received many compliments about the style. Beyond satisfied on the look just ran a bit large in bust so occasionally had to be pulled up.",
     "fit": "large",
     "quote": "ran a bit large in bust",
     "causes": [
      "comfort"
     ],
     "fix": "Consider noting that the gown may run large, especially in the bust area."
    },
    {
     "text": "The dress offered me enough sparkle I didn't need to wear anything additional to shine! Even though it looked like I was sewn into it, it offered a lot of flexibility, was very comfortable for me to dance in all night1",
     "fit": "small",
     "quote": "looked like I was sewn into it",
     "causes": [],
     "fix": "Consider suggesting customers size up for a more comfortable fit."
    },
    {
     "text": "Stunning My husband's jaw dropped when I put this on.  It was a little long so I had to wear 4 inch heels to pull it off.  I got the 0 and 2 and actually thought they may have been mislabeled as the 2 seemed smaller than the 0.",
     "fit": "small",
     "quote": "the 2 seemed smaller than the 0",
     "causes": [
      "length"
     ],
     "fix": "Consider adding a note about potential sizing inconsistencies or recommending customers order two sizes to ensure a good fit."
    }
   ]
  },
  {
   "item": "148089",
   "category": "dress",
   "n_reviews": 432,
   "sampled": 60,
   "true_small": 0.20601851851851852,
   "true_large": 0.018518518518518517,
   "pred_small": 0.5166666666666667,
   "pred_large": 0.06666666666666667,
   "kw_small": 0.5,
   "kw_large": 0.016666666666666666,
   "causes": {
    "comfort": 0.26666666666666666,
    "length": 0.25,
    "fabric_quality": 0.06666666666666667,
    "colour_vs_photo": 0.05,
    "style_vs_photo": 0.03333333333333333,
    "other": 0.03333333333333333,
    "zipper_or_closure": 0.016666666666666666
   },
   "report": {
    "size_note": "Runs small: most customers size up one.",
    "listing_fix": "The sleeves are fitted, so consider sizing up for comfortable movement. Some customers found the sleeves too snug, especially when reaching back.",
    "photo_to_add": "Photo of someone wearing the garment and reaching their arms overhead.",
    "headline": "Runs small, especially in sleeves"
   },
   "examples": [
    {
     "text": "Unique color and attention grabber! it's a bit tight around the arms and chest.",
     "fit": "small",
     "quote": "a bit tight around the arms and chest",
     "causes": [
      "comfort"
     ],
     "fix": "Consider suggesting customers size up if they prefer a more relaxed fit, especially around the arms and chest."
    },
    {
     "text": "The dress was just okay. It fit but I felt a like I was drowning in the dress just a little bit.",
     "fit": "large",
     "quote": "I felt like I was drowning in the dress just a little bit",
     "causes": [
      "comfort"
     ],
     "fix": "Consider adding a note about the dress having a looser fit and recommending customers check measurements carefully."
    },
    {
     "text": "Gorgeous dress! Felt like a princess! Fits true to size. Arms were a little snug on my wide shoulders. But overall great dress!",
     "fit": "small",
     "quote": "Arms were a little snug",
     "causes": [
      "comfort"
     ],
     "fix": "Consider mentioning that the dress may fit snugly on those with wider shoulders."
    },
    {
     "text": "This dress is amazing. I got a ton of compliments. Like most people said the arms are a little snug but it didnt get in the way. The dress just fit beautifully.",
     "fit": "small",
     "quote": "the arms are a little snug",
     "causes": [
      "length"
     ],
     "fix": "Consider mentioning that the sleeves may run slightly snug for some customers."
    }
   ]
  },
  {
   "item": "149739",
   "category": "gown",
   "n_reviews": 305,
   "sampled": 60,
   "true_small": 0.12786885245901639,
   "true_large": 0.04918032786885246,
   "pred_small": 0.16666666666666666,
   "pred_large": 0.15,
   "kw_small": 0.08333333333333333,
   "kw_large": 0.08333333333333333,
   "causes": {
    "length": 0.5333333333333333,
    "fabric_quality": 0.1,
    "zipper_or_closure": 0.03333333333333333,
    "other": 0.03333333333333333,
    "comfort": 0.016666666666666666,
    "colour_vs_photo": 0.016666666666666666
   },
   "report": {
    "size_note": "Runs small: most customers size up one.",
    "listing_fix": "Many customers found this dress to be snug, especially under the arms. Consider sizing up for a more comfortable fit.",
    "photo_to_add": "Photo of model wearing the dress with measurements labeled (bust, waist, length).",
    "headline": "Length and sizing issues"
   },
   "examples": [
    {
     "text": "Great I could have went a size smaller but the 4 was fine.  I felt very elegant.",
     "fit": "large",
     "quote": "I could have went a size smaller",
     "causes": [],
     "fix": "Consider suggesting customers size down for a more fitted feel."
    },
    {
     "text": "Classy Really liked how the dress looked on but I am 5 ft 4 and it was a little short in the front. I would recommend getting a 4L if you're my size or taller!",
     "fit": "large",
     "quote": "a 4L",
     "causes": [
      "length"
     ],
     "fix": "Consider adding a note about the dress's length, especially for those under 5'4\"."
    },
    {
     "text": "I wore it to the Army Military Ball and it was very suitable for the occasion!! runs true to size, the petit is really short.  i am 5'5 and needed to regular. it was a great dress!",
     "fit": "large",
     "quote": "the petit is really short",
     "causes": [
      "length"
     ],
     "fix": "Consider noting that the 'petit' sizing may run short, especially for taller individuals."
    },
    {
     "text": "Very comfortable! A little short but a great dress! Definitely order the Long. I am 5.7 and the 4L was still short for my liking. But the dress was very comfortable and looked great!",
     "fit": "large",
     "quote": "4L was still short for my liking",
     "causes": [
      "length"
     ],
     "fix": "Consider adding a note recommending taller customers order the 'Long' version or size up."
    }
   ]
  },
  {
   "item": "152662",
   "category": "gown",
   "n_reviews": 485,
   "sampled": 60,
   "true_small": 0.08041237113402062,
   "true_large": 0.0865979381443299,
   "pred_small": 0.18333333333333332,
   "pred_large": 0.1,
   "kw_small": 0.06666666666666667,
   "kw_large": 0.11666666666666667,
   "causes": {
    "length": 0.21666666666666667,
    "comfort": 0.11666666666666667,
    "fabric_quality": 0.08333333333333333,
    "zipper_or_closure": 0.05,
    "colour_vs_photo": 0.03333333333333333,
    "other": 0.016666666666666666
   },
   "report": {
    "size_note": "Runs small: most customers size up one.",
    "listing_fix": "This item tends to run small, especially in the bust. Consider sizing up for a more comfortable fit, particularly if you plan to wear a bra or shapewear.",
    "photo_to_add": "",
    "headline": "Small Sizing, Especially in the Bust"
   },
   "examples": [
    {
     "text": "Absolutely Perfect The dress came on time, and was perfect! Only thing is I have a very small bust and was loose at the top.",
     "fit": "large",
     "quote": "was loose at the top",
     "causes": [
      "comfort"
     ],
     "fix": "Consider adding a note about the dress being looser-fitting in the bust for those with a smaller chest."
    },
    {
     "text": "Very pretty, classy dress. Lovely dress, I only didn't end up wearing it because I was 3 months pregnant at the time and it is very fitted at the midsection.",
     "fit": "small",
     "quote": "very fitted at the midsection",
     "causes": [
      "other"
     ],
     "fix": "Consider adding a note about the dress's fitted style, especially around the midsection, which may not be suitable for those who are pregnant or prefer a looser fit."
    },
    {
     "text": "Perfect as a bridesmaids dress in a religious wedding! Fit a little snug but that was the only problem. You can't wear a bra with it, but you don't need one. Besides that it's comfortable and a nice thick material. Perfect for a bridesmaid dress!",
     "fit": "small",
     "quote": "Fit a little snug",
     "causes": [
      "comfort"
     ],
     "fix": "Consider mentioning that the dress fits snugly and may not accommodate a bra."
    },
    {
     "text": "The perfect dress! I wore this to an ROTC ball and I got compliments on this dress the entire night! I normally wear a size 4L dress, but the size 2L seemed to fit better.  It hugged all the right places and was the perfect length with 3 inch heels.  I highly recommend it!",
     "fit": "large",
     "quote": "the size 2L seemed to fit better",
     "causes": [],
     "fix": "Consider mentioning that the dress may run slightly large, and customers might want to size down."
    }
   ]
  },
  {
   "item": "153475",
   "category": "gown",
   "n_reviews": 516,
   "sampled": 60,
   "true_small": 0.07945736434108527,
   "true_large": 0.13372093023255813,
   "pred_small": 0.25,
   "pred_large": 0.25,
   "kw_small": 0.13333333333333333,
   "kw_large": 0.13333333333333333,
   "causes": {
    "length": 0.38333333333333336,
    "other": 0.06666666666666667,
    "style_vs_photo": 0.05,
    "zipper_or_closure": 0.05,
    "comfort": 0.05
   },
   "report": {
    "size_note": "Runs small for some; consider sizing up.",
    "listing_fix": "This item fits snugly, especially in the bust and waist. Customers who typically wear a specific size may find they need to go up one size for a comfortable fit.",
    "photo_to_add": "Image showing garment measurements laid flat, including bust, waist, and length.",
    "headline": "Inconsistent sizing: small and large"
   },
   "examples": [
    {
     "text": "Loved it! Perfect dress! The bodice was a little large, but with a strapless bra it worked fine.",
     "fit": "large",
     "quote": "a little large",
     "causes": [
      "other"
     ],
     "fix": "Consider mentioning that the bodice may be slightly loose for some wearers."
    },
    {
     "text": "the waist was incredibliy small, even in the larger size. the dress was small especially in the waist",
     "fit": "small",
     "quote": "the waist was incredibliy small, even in the larger size",
     "causes": [],
     "fix": "Consider adding a note about the dress running small, especially in the waist, and recommending customers size up."
    },
    {
     "text": "A beautiful gown.  Was slim fitting, so was glad to have the next size up as a back-up. Received compliments all night long!",
     "fit": "small",
     "quote": "Was slim fitting, so was glad to have the next size up as a back-up",
     "causes": [],
     "fix": "Consider mentioning that the gown has a slim fit and customers may want to size up."
    },
    {
     "text": "Didn't end up wearing it Didn't end up wearing it because it just seemed a little too cutesy for my style, but it is a flattering dress. A little too big in the bust for me.",
     "fit": "large",
     "quote": "A little too big in the bust for me.",
     "causes": [
      "style_vs_photo"
     ],
     "fix": "Consider adding that the dress may run slightly large in the bust."
    }
   ]
  },
  {
   "item": "154002",
   "category": "gown",
   "n_reviews": 621,
   "sampled": 60,
   "true_small": 0.057971014492753624,
   "true_large": 0.07890499194847021,
   "pred_small": 0.21666666666666667,
   "pred_large": 0.1,
   "kw_small": 0.11666666666666667,
   "kw_large": 0.05,
   "causes": {
    "length": 0.2833333333333333,
    "comfort": 0.21666666666666667,
    "fabric_quality": 0.1,
    "zipper_or_closure": 0.05,
    "style_vs_photo": 0.05,
    "colour_vs_photo": 0.03333333333333333,
    "other": 0.03333333333333333
   },
   "report": {
    "size_note": "Runs small: most customers size up one.",
    "listing_fix": "Customers report this item runs small, especially in the bust. Consider sizing up for a more comfortable fit.",
    "photo_to_add": "",
    "headline": "Small fit, sizing up recommended"
   },
   "examples": [
    {
     "text": "This dress was gorgeous, form fitting, but not restrictive. I got a ton of compliments! I ordered the 0R and 2R. The 0 fit better. Dress seems to strech a little after you have it on",
     "fit": "small",
     "quote": "The 0 fit better",
     "causes": [],
     "fix": "Consider recommending customers order a size up, as this dress may run slightly small."
    },
    {
     "text": "I felt like royalty it's an amazing dress. Its elegant and made me feel and lool beautiful. Im 106 lbs and this dress was way too small. And the sequense do hurt a bit at your under arm area",
     "fit": "small",
     "quote": "way too small",
     "causes": [
      "fabric_quality",
      "comfort"
     ],
     "fix": "Consider recommending that customers size up, especially if they are petite."
    },
    {
     "text": "Perfect for the Gatsby gala event. Slips down a bit on the bust area so order a size smaller and the work on the dress hurts the arms after a while but looks gorgeous and perfect for a evening gala",
     "fit": "small",
     "quote": "order a size smaller",
     "causes": [
      "comfort"
     ],
     "fix": "Consider recommending a size down for a more secure fit, especially for those with smaller busts."
    },
    {
     "text": "This gown was extremely comfortable and so great at hiding the butt and belly! Will rent again! I usually wear a 6 but it was a little big in the chest. I ended up wearing the 4 and it was perfect!",
     "fit": "large",
     "quote": "it was a little big in the chest",
     "causes": [],
     "fix": "Consider recommending renters order a size down if they are smaller in the bust."
    }
   ]
  },
  {
   "item": "162634",
   "category": "gown",
   "n_reviews": 400,
   "sampled": 60,
   "true_small": 0.165,
   "true_large": 0.0175,
   "pred_small": 0.3333333333333333,
   "pred_large": 0.08333333333333333,
   "kw_small": 0.21666666666666667,
   "kw_large": 0.016666666666666666,
   "causes": {
    "length": 0.25,
    "comfort": 0.1,
    "fabric_quality": 0.08333333333333333,
    "colour_vs_photo": 0.06666666666666667,
    "zipper_or_closure": 0.05,
    "other": 0.03333333333333333,
    "style_vs_photo": 0.016666666666666666
   },
   "report": {
    "size_note": "Runs small: most customers size up one",
    "listing_fix": "This dress fits closely, especially in the bust. Consider sizing up for a more comfortable fit, particularly if you are between sizes.",
    "photo_to_add": "Photo of model with similar bust size wearing the dress, with measurements listed for bust, waist, and hips.",
    "headline": "Small bust, size up"
   },
   "examples": [
    {
     "text": "pretty dress, but runs fall runs small, nice dress",
     "fit": "small",
     "quote": "runs fall runs small",
     "causes": [
      "fabric_quality"
     ],
     "fix": "Consider recommending customers size up for a more comfortable fit."
    },
    {
     "text": "amazing color! The double slit and lace back....sexy ;) Cant wear a spank because of the low back.",
     "fit": "small",
     "quote": "Cant wear a spank because of the low back",
     "causes": [
      "other"
     ],
     "fix": "Consider mentioning the low back design and potential limitations for shapewear."
    },
    {
     "text": "I loved it! Perfect dress So comfortable with the M slit, and I felt gorgeous. Definitely need to go a size up from what you might normally wear in stores.",
     "fit": "small",
     "quote": "Definitely need to go a size up from what you might normally wear in stores.",
     "causes": [],
     "fix": "Consider adding a note to size up from your usual size."
    },
    {
     "text": "Best dress ever! Loved it! The slits on the dress scared me but they ended up being the perfect touch. Although, it was hard to wear spanx in this dress but I didn't wear a bra!",
     "fit": "small",
     "quote": "hard to wear spanx",
     "causes": [
      "comfort"
     ],
     "fix": "Consider mentioning that the dress may be snug for those who prefer to wear shapewear."
    }
   ]
  },
  {
   "item": "166006",
   "category": "gown",
   "n_reviews": 398,
   "sampled": 60,
   "true_small": 0.11055276381909548,
   "true_large": 0.0678391959798995,
   "pred_small": 0.25,
   "pred_large": 0.16666666666666666,
   "kw_small": 0.25,
   "kw_large": 0.08333333333333333,
   "causes": {
    "length": 0.3333333333333333,
    "comfort": 0.2,
    "zipper_or_closure": 0.15,
    "fabric_quality": 0.11666666666666667,
    "other": 0.08333333333333333,
    "colour_vs_photo": 0.016666666666666666,
    "style_vs_photo": 0.016666666666666666
   },
   "report": {
    "size_note": "Runs small: most customers size up one.",
    "listing_fix": "This top fits snugly, especially in the bust. Consider sizing up for a more comfortable fit, particularly if you plan to wear a bra.",
    "photo_to_add": "Photo of the top being zipped up on a model with a similar bust size to the target customer.",
    "headline": "Small fit, bust tightness, sizing issues"
   },
   "examples": [
    {
     "text": "Great dress Was a little tight in bust but I wore it with fur bolero - so looked great",
     "fit": "small",
     "quote": "a little tight in bust",
     "causes": [
      "comfort"
     ],
     "fix": "Consider suggesting customers wear a supportive undergarment or size up if they are busty."
    },
    {
     "text": "This dress was wonderful and I felt like a true diva!! I won best dress of the party! Runs a little small around the bust area.",
     "fit": "small",
     "quote": "Runs a little small around the bust area",
     "causes": [
      "other"
     ],
     "fix": "Consider ordering a size up if you are busty."
    },
    {
     "text": "The dress is super classy and really reminds me of Audry Hepburn. I normally wear a 4 in dresses but I feel as though a 2 would have fit best.",
     "fit": "large",
     "quote": "a 2 would have fit best",
     "causes": [],
     "fix": "Consider suggesting customers size down if they prefer a more fitted look."
    },
    {
     "text": "It's a beautiful dress, but runs very small in the chest.  Couldn't zip it all the way up. Very small in the chest, true to size every where else.",
     "fit": "small",
     "quote": "Couldn't zip it all the way up",
     "causes": [
      "zipper_or_closure"
     ],
     "fix": "Consider recommending customers size up, especially if they are busty."
    }
   ]
  },
  {
   "item": "168610",
   "category": "gown",
   "n_reviews": 531,
   "sampled": 60,
   "true_small": 0.08286252354048965,
   "true_large": 0.1111111111111111,
   "pred_small": 0.18333333333333332,
   "pred_large": 0.23333333333333334,
   "kw_small": 0.18333333333333332,
   "kw_large": 0.06666666666666667,
   "causes": {
    "length": 0.55,
    "zipper_or_closure": 0.11666666666666667,
    "comfort": 0.08333333333333333,
    "style_vs_photo": 0.03333333333333333,
    "colour_vs_photo": 0.016666666666666666,
    "fabric_quality": 0.016666666666666666,
    "other": 0.016666666666666666
   },
   "report": {
    "size_note": "Runs both small and large; consider checking measurements.",
    "listing_fix": "This dress has a fitted bodice with boning. Please compare your bust measurements to the size chart before ordering, as many customers found it tight or loose in the bust area.",
    "photo_to_add": "Size chart with bust, waist, and hip measurements clearly labeled.",
    "headline": "Size inconsistency: small and large fits"
   },
   "examples": [
    {
     "text": "It was the perfect dress for the occasion and I loved the color for spring! It's a tight corset so you don't have to worry about it falling down but it pinches a little when you sit down so sit up straight!",
     "fit": "small",
     "quote": "it pinches a little when you sit down",
     "causes": [
      "comfort"
     ],
     "fix": "Consider mentioning the corset style may be restrictive when sitting."
    },
    {
     "text": "The color was very unique and very flattering. The body of the dress was very run-of-the-mill gown. Incredibly small in the bust -- could have worn the 6R, but it cut in too hard on my chest. Wore 4\" heels, probably would go with the long if I were to rent again.",
     "fit": "small",
     "quote": "Incredibly small in the bust",
     "causes": [
      "comfort"
     ],
     "fix": "Consider suggesting customers size up, especially if they are bustier."
    },
    {
     "text": "The dress was great for military ball! I usually wear a 6 so it was a little big because they were not able to send the 6 but it worked. It was a little long as well I should have gotten an R not an L. Great dress and received a lot of compliments on it. Really pretty color.",
     "fit": "large",
     "quote": "it was a little big",
     "causes": [
      "length"
     ],
     "fix": "Consider adding a note about potential sizing differences or recommending customers check size charts carefully."
    },
    {
     "text": "Great color! Perfect for the summer black tie wedding!   Loved this dress! Beautiful color and so much fun to wear. I went with the 4 because the 2 was too tight in my bust. The dress was a little long so I needed to wear my highest heels. Really great gown! Glad I rented it!",
     "fit": "small",
     "quote": "the 2 was too tight in my bust",
     "causes": [
      "length"
     ],
     "fix": "Consider recommending renters measure their bust circumference to ensure a comfortable fit."
    }
   ]
  },
  {
   "item": "1687082",
   "category": "gown",
   "n_reviews": 311,
   "sampled": 60,
   "true_small": 0.03858520900321544,
   "true_large": 0.04823151125401929,
   "pred_small": 0.2833333333333333,
   "pred_large": 0.08333333333333333,
   "kw_small": 0.2833333333333333,
   "kw_large": 0.03333333333333333,
   "causes": {
    "length": 0.38333333333333336,
    "zipper_or_closure": 0.1,
    "comfort": 0.08333333333333333,
    "fabric_quality": 0.05,
    "other": 0.03333333333333333,
    "style_vs_photo": 0.03333333333333333,
    "colour_vs_photo": 0.016666666666666666
   },
   "report": {
    "size_note": "Runs small: consider sizing up, especially if you prefer a looser fit.",
    "listing_fix": "This style fits closely. We recommend checking the size chart carefully and considering ordering a size up for a more comfortable fit, particularly if you plan to wear layers or shapewear.",
    "photo_to_add": "Size chart with measurements for bust, waist, and length.",
    "headline": "Small fit, size up for comfort"
   },
   "examples": [
    {
     "text": "Great colors.  Slightly worn looking. It was long even with 3-4 in heels, I am 5'4 3/4.  Didn't need a bra.",
     "fit": "large",
     "quote": "It was long even with 3-4 in heels",
     "causes": [
      "length"
     ],
     "fix": "Consider noting the dress's length and suggesting heel height for a more proportionate look."
    },
    {
     "text": "Lots of compliments, really fun to wear.  Normally I wear a 6L, but the neck size was a bit too tight, so the 8L fit the best.",
     "fit": "small",
     "quote": "neck size was a bit too tight",
     "causes": [],
     "fix": "Consider mentioning that the neck may run slightly small, and sizing up is recommended."
    },
    {
     "text": "I felt great in this dress! So comfortable. Tight around the next but not uncomfortable!  Very heavy, dont wear in hot souther weather. But i would suggest this to anyone ( and have!)",
     "fit": "small",
     "quote": "Tight around the next",
     "causes": [
      "fabric_quality"
     ],
     "fix": "Consider mentioning the dress is fitted around the bust in the product description."
    },
    {
     "text": "Love it! Very pretty dress.  Just remember, you must wear a backless bra and you cannot wear spanx (because of the cut of the back.  I would definitely wear this again and got a lot of compliments.",
     "fit": "small",
     "quote": "cannot wear spanx",
     "causes": [
      "other"
     ],
     "fix": "Consider adding a note about the dress's cut and the need for a specific type of bra."
    }
   ]
  },
  {
   "item": "172027",
   "category": "dress",
   "n_reviews": 975,
   "sampled": 60,
   "true_small": 0.2923076923076923,
   "true_large": 0.033846153846153845,
   "pred_small": 0.3333333333333333,
   "pred_large": 0.06666666666666667,
   "kw_small": 0.21666666666666667,
   "kw_large": 0.016666666666666666,
   "causes": {
    "length": 0.6166666666666667,
    "comfort": 0.11666666666666667,
    "fabric_quality": 0.08333333333333333,
    "style_vs_photo": 0.05,
    "zipper_or_closure": 0.03333333333333333,
    "other": 0.03333333333333333,
    "colour_vs_photo": 0.016666666666666666
   },
   "report": {
    "size_note": "Runs small: many customers found it tight, especially in the hips.",
    "listing_fix": "This dress tends to run small, particularly in the hip and armpit areas. Consider sizing up for a more comfortable fit.",
    "photo_to_add": "Photo of the dress on a model with measurements of bust, waist, and hip.",
    "headline": "Small fit, hip tightness reported"
   },
   "examples": [
    {
     "text": "It fit odly. The dress was really tight and short so make sure you size up! ALso oddly loose on the top.",
     "fit": "small",
     "quote": "really tight",
     "causes": [
      "length"
     ],
     "fix": "Consider adding a note to size up, as this dress runs tight and may also be shorter than expected."
    },
    {
     "text": "Cute, fun, love the open back! Runs a bit small but also has some stretch which helps to make it more forgiving. I've rented it twice so it's a winner for me.",
     "fit": "small",
     "quote": "Runs a bit small",
     "causes": [],
     "fix": "Consider suggesting renters size up if they are between sizes."
    },
    {
     "text": "got tons of compliments! really adorable, wish i could just buy it :) i ordered a 0 and 2 and had a hard time deciding which i should wear. the 2 was too loose on top so i went for the 0 and it was great.",
     "fit": "large",
     "quote": "the 2 was too loose on top",
     "causes": [],
     "fix": "Consider recommending customers order a size down if they are between sizes."
    },
    {
     "text": "Rave reviews from friends and strangers alike! Fit was a little bit off, as it was slightly snug at the hips but was very loose at the bust and shoulders. \nHowever, didn't have any issues with sleeves slipping off while wearing.",
     "fit": "small",
     "quote": "slightly snug at the hips",
     "causes": [
      "comfort"
     ],
     "fix": "Consider adding a note about the fit being snug around the hips, which may require sizing up for some body types."
    }
   ]
  },
  {
   "item": "172914",
   "category": "dress",
   "n_reviews": 306,
   "sampled": 60,
   "true_small": 0.13071895424836602,
   "true_large": 0.08496732026143791,
   "pred_small": 0.2833333333333333,
   "pred_large": 0.16666666666666666,
   "kw_small": 0.15,
   "kw_large": 0.06666666666666667,
   "causes": {
    "length": 0.55,
    "fabric_quality": 0.06666666666666667,
    "comfort": 0.05,
    "style_vs_photo": 0.05,
    "other": 0.03333333333333333
   },
   "report": {
    "size_note": "Runs small: most customers size up one.",
    "listing_fix": "Customers report this item runs small, especially in the bust and waist. We recommend sizing up for a more comfortable fit.",
    "photo_to_add": "Photo with measurements of bust, waist, and length laid flat.",
    "headline": "Small sizing, bust and waist issues"
   },
   "examples": [
    {
     "text": "Beautiful dress and color.  I usually wear a 2, but that was a little snug.",
     "fit": "small",
     "quote": "a little snug",
     "causes": [],
     "fix": "Consider suggesting customers size up if they prefer a more relaxed fit."
    },
    {
     "text": "The color of this dress is amazing!  The top part fit a little big,  #graduation",
     "fit": "large",
     "quote": "The top part fit a little big",
     "causes": [],
     "fix": "Consider mentioning that the top may run slightly large."
    },
    {
     "text": "Cute, fun, flirty dress! The 0 for me was even a tad big in the top but overall fit nicely!",
     "fit": "large",
     "quote": "a tad big in the top",
     "causes": [],
     "fix": "Consider recommending customers size down, especially if they are smaller in the bust."
    },
    {
     "text": "Easter Brunch I felt like it was a little tighter than I hoped but it was still comfortable and perfectly sweet for the holiday!",
     "fit": "small",
     "quote": "a little tighter than I hoped",
     "causes": [],
     "fix": "Consider suggesting customers size up for a more relaxed fit."
    }
   ]
  },
  {
   "item": "174086",
   "category": "dress",
   "n_reviews": 1711,
   "sampled": 60,
   "true_small": 0.0777323202805377,
   "true_large": 0.1326709526592636,
   "pred_small": 0.2,
   "pred_large": 0.18333333333333332,
   "kw_small": 0.15,
   "kw_large": 0.15,
   "causes": {
    "length": 0.23333333333333334,
    "comfort": 0.11666666666666667,
    "zipper_or_closure": 0.03333333333333333,
    "fabric_quality": 0.03333333333333333,
    "other": 0.016666666666666666,
    "colour_vs_photo": 0.016666666666666666
   },
   "report": {
    "size_note": "Runs small: consider sizing up, especially in the chest.",
    "listing_fix": "This style tends to fit closely, particularly in the chest and shoulders. We recommend checking the size chart carefully and considering sizing up if you prefer a more relaxed fit.",
    "photo_to_add": "Size chart with measurements for chest, shoulders, and length.",
    "headline": "Inconsistent sizing, chest fit issues"
   },
   "examples": [
    {
     "text": "Fun dress for spring/summer wedding! Lovely dress - fit a little big in the chest area, but other than that, really enjoyed wearing it.",
     "fit": "large",
     "quote": "fit a little big in the chest area",
     "causes": [],
     "fix": "Consider mentioning that the dress may run slightly large in the chest."
    },
    {
     "text": "I loved this dress!!! I didn't want to return it The puff in front my stomach was a little too big, I had to keep holding it down on the side for photos",
     "fit": "large",
     "quote": "a little too big",
     "causes": [
      "comfort"
     ],
     "fix": "Consider adding a note about the dress having a looser fit in the front."
    },
    {
     "text": "Super flattering The smaller size fit well. I didn't wear a bra but didn't really need one. Only downside was that I wasn't the only girl in that dress at the wedding",
     "fit": "small",
     "quote": "The smaller size fit well",
     "causes": [
      "other"
     ],
     "fix": "Consider suggesting customers order a size up for a more comfortable fit."
    },
    {
     "text": "loved it and received so many compliments! It was every so slightly tight around the shoulders, but that was my own fault :)  It was a fantastic dress and the skirt had pockets!",
     "fit": "small",
     "quote": "slightly tight around the shoulders",
     "causes": [
      "comfort"
     ],
     "fix": "Consider mentioning the dress may fit snugly around the shoulders for some body types."
    }
   ]
  },
  {
   "item": "180843",
   "category": "dress",
   "n_reviews": 320,
   "sampled": 60,
   "true_small": 0.215625,
   "true_large": 0.028125,
   "pred_small": 0.38333333333333336,
   "pred_large": 0.05,
   "kw_small": 0.26666666666666666,
   "kw_large": 0.06666666666666667,
   "causes": {
    "length": 0.21666666666666667,
    "comfort": 0.11666666666666667,
    "fabric_quality": 0.08333333333333333,
    "other": 0.06666666666666667,
    "colour_vs_photo": 0.06666666666666667,
    "zipper_or_closure": 0.05,
    "style_vs_photo": 0.016666666666666666
   },
   "report": {
    "size_note": "Runs small: most customers size up one.",
    "listing_fix": "This style fits snugly in the chest. Consider sizing up for a more comfortable fit, especially if you are larger in the bust.",
    "photo_to_add": "Photo of model's bust measurements.",
    "headline": "Small bust, size up."
   },
   "examples": [
    {
     "text": "perfectly paired dress with necklace! runs large, hit just above knee- looked great!",
     "fit": "large",
     "quote": "runs large",
     "causes": [],
     "fix": "Consider suggesting customers size down if they prefer a more fitted look."
    },
    {
     "text": "Amazing dress! Very flattering. Got a ton of compliments I usually wear a 4 in dresses, but this ran small on top",
     "fit": "small",
     "quote": "ran small on top",
     "causes": [],
     "fix": "Consider recommending customers size up, especially if they are between sizes."
    },
    {
     "text": "Great dress!     \n Runs small.   Wore a 10 but could have done a 12 I think.   My other dress this weekend was a 6!   Straps were super long and I had to shorten them.   Thick and luxurious material.",
     "fit": "small",
     "quote": "Runs small",
     "causes": [
      "length"
     ],
     "fix": "Consider suggesting customers size up, as this dress appears to run small."
    },
    {
     "text": "Will rent again! So flattering! I've never worn a 6 in my life BUT-while the 4 fit fine it was tight around the ribcage and my boobs were a little squished-so the 6 was perfect-fit like a glove!!!!! So classy and the pockets are fantastic!",
     "fit": "small",
     "quote": "it was tight around the ribcage and my boobs were a little squished",
     "causes": [
      "comfort"
     ],
     "fix": "Consider recommending renters size up if they have a wider ribcage or larger bust."
    }
   ]
  },
  {
   "item": "184374",
   "category": "shift",
   "n_reviews": 300,
   "sampled": 60,
   "true_small": 0.04666666666666667,
   "true_large": 0.37,
   "pred_small": 0.11666666666666667,
   "pred_large": 0.2833333333333333,
   "kw_small": 0.1,
   "kw_large": 0.16666666666666666,
   "causes": {
    "length": 0.4666666666666667,
    "style_vs_photo": 0.08333333333333333,
    "fabric_quality": 0.05,
    "zipper_or_closure": 0.016666666666666666,
    "other": 0.016666666666666666,
    "colour_vs_photo": 0.016666666666666666,
    "comfort": 0.016666666666666666
   },
   "report": {
    "size_note": "Runs large: consider sizing down.",
    "listing_fix": "This style is designed with a relaxed fit, but many customers find it runs larger than expected. We recommend checking the size chart carefully and considering sizing down for a more fitted look.",
    "photo_to_add": "Size chart with measurements for bust, waist, and length.",
    "headline": "Runs large, consider sizing down"
   },
   "examples": [
    {
     "text": "TONS of compliments & I felt beautiful all night.  It was a little big but it looked great!",
     "fit": "large",
     "quote": "It was a little big",
     "causes": [],
     "fix": "Consider mentioning that the garment may run slightly large, and customers might want to size down."
    },
    {
     "text": "Beautiful Color! Loved this dress, hides tummy area. Runs pretty big though, so orders second size down.",
     "fit": "large",
     "quote": "Runs pretty big though",
     "causes": [],
     "fix": "Consider ordering a size down for a more fitted look."
    },
    {
     "text": "Loved it!  Got several compliments. Very comfortable. The 0 also fit but was very snug & would be impossible to sit in.",
     "fit": "small",
     "quote": "very snug",
     "causes": [],
     "fix": "Consider recommending customers size up for a more comfortable fit, especially if they plan to sit."
    },
    {
     "text": "Did not like the fit This was the backup dress that I ordered. It did not fit me well, I felt it was like a giant t-shirt.",
     "fit": "large",
     "quote": "like a giant t-shirt",
     "causes": [],
     "fix": "Consider mentioning the dress has a relaxed or oversized fit in the description."
    }
   ]
  },
  {
   "item": "1869763",
   "category": "shift",
   "n_reviews": 362,
   "sampled": 60,
   "true_small": 0.20994475138121546,
   "true_large": 0.03038674033149171,
   "pred_small": 0.31666666666666665,
   "pred_large": 0.16666666666666666,
   "kw_small": 0.26666666666666666,
   "kw_large": 0.1,
   "causes": {
    "length": 0.4166666666666667,
    "fabric_quality": 0.23333333333333334,
    "comfort": 0.18333333333333332,
    "style_vs_photo": 0.016666666666666666,
    "other": 0.016666666666666666
   },
   "report": {
    "size_note": "Runs small: most customers size up one",
    "listing_fix": "This dress tends to run small, especially in the hips and waist. Consider sizing up for a more comfortable fit.",
    "photo_to_add": "",
    "headline": "Small fit, length issues"
   },
   "examples": [
    {
     "text": "This dress was great! I wore it to my sorority formal and got a ton of compliments :) I usually wear a 4, but I saw that it ran a bit large and the 2 ended up fitting great.",
     "fit": "large",
     "quote": "ran a bit large",
     "causes": [],
     "fix": "Consider suggesting customers size down if they prefer a more fitted look."
    },
    {
     "text": "This dress is beautiful and really is an attention grabber! I loved this dress and it fit me like a glove.  I had to go up one size from my normal as the 12 felt a little constricting.  But it was very flattering and comfortable!",
     "fit": "small",
     "quote": "felt a little constricting",
     "causes": [],
     "fix": "Consider suggesting customers size up if they prefer a more relaxed fit."
    },
    {
     "text": "Great shift dress. Comfortable and flattering.  Wore size 6 since reviews said it ran a tad small. Wish i ordered the size 4, as the size 6 was a bit loose in the hips and waist. Overall very comfortable and looks great with t-strap heels.",
     "fit": "large",
     "quote": "a bit loose in the hips and waist",
     "causes": [
      "length"
     ],
     "fix": "Consider suggesting customers size down, as this dress may run slightly large in the hips and waist."
    },
    {
     "text": "Beautiful dress for a 1920's themed work party! I wore this dress for my husband's 1920's themed holiday work party. I had a ton of compliments and felt great in the dress! The lower back of the dress fit a bit loose, however the rest fit quite snug.",
     "fit": "small",
     "quote": "quite snug",
     "causes": [
      "comfort"
     ],
     "fix": "Consider mentioning that the dress fits snugly through the torso, and some customers may prefer to size up."
    }
   ]
  },
  {
   "item": "755371",
   "category": "gown",
   "n_reviews": 393,
   "sampled": 60,
   "true_small": 0.043256997455470736,
   "true_large": 0.178117048346056,
   "pred_small": 0.21666666666666667,
   "pred_large": 0.16666666666666666,
   "kw_small": 0.08333333333333333,
   "kw_large": 0.08333333333333333,
   "causes": {
    "length": 0.4166666666666667,
    "comfort": 0.08333333333333333,
    "fabric_quality": 0.05,
    "zipper_or_closure": 0.016666666666666666
   },
   "report": {
    "size_note": "Runs large: consider sizing down, especially if petite.",
    "listing_fix": "This style is designed with a fitted silhouette, but some customers found it ran larger than expected. We recommend checking our size chart carefully and considering ordering a size down for a more tailored fit.",
    "photo_to_add": "Size chart with measurements for bust, waist, and hips.",
    "headline": "Too Big: Size Down for Best Fit"
   },
   "examples": [
    {
     "text": "I could have worn a 4 Long...I am 5'7\" it was a little short for me good luck finding a good bra for this dress",
     "fit": "large",
     "quote": "I could have worn a 4 Long",
     "causes": [
      "length"
     ],
     "fix": "Consider adding a note about the dress running short, especially for taller customers."
    },
    {
     "text": "Loved this dress and received tons of compliments. Fits like a glove. The fabric is quite stretchy, so I would recommend to order a smaller size. I loved this dress.",
     "fit": "small",
     "quote": "order a smaller size",
     "causes": [
      "fabric_quality"
     ],
     "fix": "Consider recommending customers order a size down due to the stretchy fabric."
    },
    {
     "text": "Not the easiest dress to wear, but stunning as a bridesmaid dress.  You will need spanx no matter how tiny you are, but overall for a skin tight dress I actually felt really good in this dress.",
     "fit": "small",
     "quote": "You will need spanx no matter how tiny you are",
     "causes": [
      "comfort"
     ],
     "fix": "Consider mentioning in the description that spanx may be needed for a comfortable fit."
    },
    {
     "text": "Beautiful This dress was gorgeous, especially the back! I felt amazing all night and received so many compliments! I wish I had ordered a size down though; it ran large and the stomach felt a little baggy (as you can see in the photo).",
     "fit": "large",
     "quote": "it ran large",
     "causes": [
      "length"
     ],
     "fix": "Consider suggesting customers size down as this dress seems to run large."
    }
   ]
  },
  {
   "item": "921642",
   "category": "dress",
   "n_reviews": 307,
   "sampled": 60,
   "true_small": 0.39087947882736157,
   "true_large": 0.006514657980456026,
   "pred_small": 0.7833333333333333,
   "pred_large": 0.05,
   "kw_small": 0.6,
   "kw_large": 0.03333333333333333,
   "causes": {
    "comfort": 0.5666666666666667,
    "fabric_quality": 0.13333333333333333,
    "length": 0.08333333333333333,
    "zipper_or_closure": 0.06666666666666667,
    "style_vs_photo": 0.03333333333333333,
    "other": 0.03333333333333333
   },
   "report": {
    "size_note": "Runs small: most customers size up one.",
    "listing_fix": "This style fits closely, especially in the chest and rib cage areas. Consider sizing up for a more comfortable fit.",
    "photo_to_add": "Photo showing the garment fitted on a model, with measurements of chest and rib cage circumference clearly labeled.",
    "headline": "Small size, tight fit"
   },
   "examples": [
    {
     "text": "beutiful color and great fit especially for anyone looking to hide baby bump or post baby bump.  very tight around the neck",
     "fit": "small",
     "quote": "very tight around the neck",
     "causes": [
      "comfort"
     ],
     "fix": "Consider mentioning the neckline is snug and may be uncomfortable for some."
    },
    {
     "text": "tight on the neck would have been an ok fit except for the neck. It was too tight around the neck. Kind of chokey. I need to go a size up for it to work.",
     "fit": "small",
     "quote": "need to go a size up",
     "causes": [],
     "fix": "Consider mentioning that the neckline may run tight for some."
    },
    {
     "text": "Loved this dress and wanted to keep it! Prettier in person. Received lots of compliments. Snug in the chest but loose under the armpits. Difficult to wear any sort of bra.",
     "fit": "small",
     "quote": "Snug in the chest",
     "causes": [
      "comfort"
     ],
     "fix": "Consider mentioning that the dress fits snugly in the chest and may be difficult to wear with a bra."
    },
    {
     "text": "Fantastic Dress!  This dress was so much fun to wear! The neck was tight, but otherwise very comfortable. I wore it New Orleans, and it was great in the heat, and I got so many complements!",
     "fit": "small",
     "quote": "The neck was tight",
     "causes": [
      "comfort"
     ],
     "fix": "Consider mentioning the neck might be snug for some wearers."
    }
   ]
  },
  {
   "item": "963476",
   "category": "sheath",
   "n_reviews": 458,
   "sampled": 60,
   "true_small": 0.07641921397379912,
   "true_large": 0.16812227074235808,
   "pred_small": 0.18333333333333332,
   "pred_large": 0.31666666666666665,
   "kw_small": 0.05,
   "kw_large": 0.23333333333333334,
   "causes": {
    "length": 0.5166666666666667,
    "comfort": 0.05,
    "other": 0.05,
    "style_vs_photo": 0.03333333333333333,
    "fabric_quality": 0.03333333333333333,
    "colour_vs_photo": 0.016666666666666666
   },
   "report": {
    "size_note": "Runs large: consider sizing down.",
    "listing_fix": "This dress tends to run larger than expected. Please check the size chart carefully and consider ordering a size down for a more fitted feel.",
    "photo_to_add": "Size chart with measurements for bust, waist, and length.",
    "headline": "Size issues: runs large"
   },
   "examples": [
    {
     "text": "Perfect dress to see Britney in Vegas! A little loose on the sleeves and very short, but perfect for Vegas!",
     "fit": "large",
     "quote": "A little loose on the sleeves",
     "causes": [
      "length"
     ],
     "fix": "Consider noting that the sleeves may run a bit large."
    },
    {
     "text": "Good music and good friends A little loose around the shoulders (because of previous renters)\nClassy with a low back for a little extra \nGreat first RTR experience!",
     "fit": "large",
     "quote": "A little loose around the shoulders",
     "causes": [
      "other"
     ],
     "fix": "Consider mentioning that the garment may be slightly looser around the shoulders due to previous rentals."
    },
    {
     "text": "loved this dress!  It's on the shorter side, but loved it none the less!  I ended up wearing the 4 instead of the 2 because it felt a little better in the hip area.",
     "fit": "large",
     "quote": "felt a little better in the hip area",
     "causes": [
      "length"
     ],
     "fix": "Consider noting in the description that the dress runs a bit large, especially in the hip area."
    },
    {
     "text": "This dress was the perfect mix between classy and sexy! The fit is very comfortable with a lot of stretch! If i could go back and change one thing I would have gone with a size 2!",
     "fit": "large",
     "quote": "I would have gone with a size 2!",
     "causes": [],
     "fix": "Consider suggesting customers size down if they prefer a more fitted look."
    }
   ]
  }
 ]
};
