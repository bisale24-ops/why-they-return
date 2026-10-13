window.WTR = {
 "reviews": {
  "gemma": {
   "fit": {
    "precision": 0.6413612565445026,
    "recall": 0.8166666666666667,
    "f1": 0.7184750733137829
   },
   "small": {
    "precision": 0.7766323024054983,
    "recall": 0.7533333333333333,
    "f1": 0.7648054145516074
   },
   "large": {
    "precision": 0.8458149779735683,
    "recall": 0.64,
    "f1": 0.72865275142315
   },
   "macro_f1": 0.7373110797628467,
   "accuracy": 0.7366666666666667
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
   "gemma": 0.8384389450432456,
   "keyword": 0.8846713352185815,
   "mae_gemma": 0.08101673647585718,
   "mae_keyword": 0.07585738088632928,
   "mean_truth": 0.12538694098258701
  },
  "large": {
   "gemma": 0.8659059294420851,
   "keyword": 0.7223029034082911,
   "mae_gemma": 0.07631139604660198,
   "mae_keyword": 0.051154566001560896,
   "mean_truth": 0.10823443650219611
  }
 },
 "run": {
  "gpu": "AMD Radeon Pro W7900D",
  "torch": "2.13.0+rocm10.0.0",
  "hip": "7.15.26333",
  "model": "unsloth/gemma-3-12b-it",
  "reviews": 3300,
  "seconds": 2964.1017599105835,
  "reviews_per_s": 1.1133221013638712
 },
 "products": [
  {
   "item": "1018841",
   "category": "frock",
   "n_reviews": 201,
   "sampled": 60,
   "true_small": 0.2835820895522388,
   "true_large": 0.01990049751243781,
   "pred_small": 0.31666666666666665,
   "pred_large": 0.06666666666666667,
   "kw_small": 0.16666666666666666,
   "kw_large": 0.11666666666666667,
   "causes": {
    "comfort": 0.2,
    "colour_vs_photo": 0.11666666666666667,
    "length": 0.1,
    "fabric_quality": 0.06666666666666667,
    "style_vs_photo": 0.05,
    "zipper_or_closure": 0.03333333333333333,
    "other": 0.016666666666666666
   },
   "report": {
    "size_note": "Runs small: most customers size up one",
    "listing_fix": "This dress tends to run small, especially in the bust and upper body. We recommend sizing up for a more comfortable fit.",
    "photo_to_add": "Photo of model with measurements labeled, including bust and waist.",
    "headline": "Runs small",
    "headline_replaced": true
   },
   "examples": [
    {
     "text": "STUNNING DRESS! Absolutely breathtaking. Love the color and the details. I was not able to wear it because it was too tight",
     "fit": "small",
     "quote": "it was too tight",
     "causes": [],
     "fix": "Consider advising customers that this dress may run a bit small and to size up if they are between sizes."
    },
    {
     "text": "Very elegant for a wedding.  Highly recommend choosing a dress one size larger than your normal dress size. The lace does not stretch.",
     "fit": "small",
     "quote": "Highly recommend choosing a dress one size larger than your normal dress size",
     "causes": [],
     "fix": "Consider adding a note to size up, as the lace does not stretch."
    },
    {
     "text": "n/a Beautiful dress, received many compliments. The 4 was a little tighter than I anticipated, but the 6 was too big in the midsection. \nThe picture is me in the 4 :)",
     "fit": "small",
     "quote": "a little tighter than I anticipated",
     "causes": [],
     "fix": "Consider recommending customers who are between sizes to size up."
    },
    {
     "text": "Great dress for a wedding! Definitely runs small.  I'm usually a 2/4 but could have used a 6 due to a tight band that wraps around the waist. Otherwise, a great look for a spring wedding and comfortable despite the tight fit!",
     "fit": "small",
     "quote": "runs small",
     "causes": [],
     "fix": "Consider suggesting customers size up, especially if they have a larger waist."
    }
   ]
  },
  {
   "item": "1048184",
   "category": "dress",
   "n_reviews": 183,
   "sampled": 60,
   "true_small": 0.1092896174863388,
   "true_large": 0.0546448087431694,
   "pred_small": 0.25,
   "pred_large": 0.15,
   "kw_small": 0.23333333333333334,
   "kw_large": 0.06666666666666667,
   "causes": {
    "length": 0.21666666666666667,
    "comfort": 0.18333333333333332,
    "fabric_quality": 0.15,
    "colour_vs_photo": 0.03333333333333333,
    "zipper_or_closure": 0.016666666666666666,
    "style_vs_photo": 0.016666666666666666
   },
   "report": {
    "size_note": "Runs small: consider sizing up, especially if between sizes.",
    "listing_fix": "This style is fitted and hugs the body. Many customers found it more comfortable to size up for a better fit, particularly in the hips and midsection.",
    "photo_to_add": "Photo of the dress on a model with similar measurements to the size chart, highlighting the fitted silhouette.",
    "headline": "Sizing issues: small and fitted"
   },
   "examples": [
    {
     "text": "Beautiful Vibrant colors, runs a bit snug, very form fitting.",
     "fit": "small",
     "quote": "runs a bit snug",
     "causes": [],
     "fix": "Consider mentioning that the garment runs snug and may be best suited for those who prefer a more fitted look."
    },
    {
     "text": "Great color without feeling too girly. It was body hugging so the medium was a bit tight on me but I liked the smaller fit. Great interesting way to wear color without being too loud or girly.",
     "fit": "small",
     "quote": "a bit tight on me",
     "causes": [],
     "fix": "Consider mentioning that the garment has a body-hugging fit and may run slightly small."
    },
    {
     "text": "Tight!  This dress is SUPER unique and fun. But be prepared to suck in all night! :) I didn't end up wearing this, because I felt more matador than sexy. But in the right setting on the right person it could be fantastic!",
     "fit": "small",
     "quote": "suck in all night",
     "causes": [
      "comfort"
     ],
     "fix": "Consider adding a note about the dress's fitted style and recommending shapewear for a more comfortable fit."
    },
    {
     "text": "This dress was a lot of fun! The material was almost \"wet-suit\" like. Very form fitting and helps to push everything in. I liked this dress because it stood out as not just another black dress my husband's formal work event.",
     "fit": "small",
     "quote": "Very form fitting and helps to push everything in.",
     "causes": [
      "fabric_quality",
      "comfort"
     ],
     "fix": "Consider mentioning the fabric's compressive nature and potentially recommending sizing up for a more relaxed fit."
    }
   ]
  },
  {
   "item": "1064397",
   "category": "gown",
   "n_reviews": 280,
   "sampled": 60,
   "true_small": 0.04285714285714286,
   "true_large": 0.05357142857142857,
   "pred_small": 0.18333333333333332,
   "pred_large": 0.15,
   "kw_small": 0.06666666666666667,
   "kw_large": 0.13333333333333333,
   "causes": {
    "length": 0.4,
    "comfort": 0.05,
    "colour_vs_photo": 0.03333333333333333,
    "fabric_quality": 0.03333333333333333,
    "other": 0.016666666666666666,
    "style_vs_photo": 0.016666666666666666
   },
   "report": {
    "size_note": "Sizing is inconsistent; some customers found it runs small, others large.",
    "listing_fix": "Sizing varies by body type. We recommend checking the size chart and considering your measurements carefully before ordering.",
    "photo_to_add": "Size chart with measurements for each size.",
    "headline": "Inconsistent sizing leads to returns"
   },
   "examples": [
    {
     "text": "Loved this dress! This dress was great! I thought I might not be able to zip up the back because my chest is larger for my body type, but fit perfectly. Received complements all night.",
     "fit": "small",
     "quote": "I thought I might not be able to zip up the back because my chest is larger for my body type",
     "causes": [],
     "fix": "Consider advising customers with a larger bust to size up."
    },
    {
     "text": "Great dress...but for a smaller bust Loved the length, quality, split was sexy without going overboard -- however, at 34G my bust was too large to go braless and/or to wear a strapless without bra or boobs showing.",
     "fit": "small",
     "quote": "my bust was too large to go braless",
     "causes": [
      "comfort"
     ],
     "fix": "Consider adding a note about the dress running small in the bust for those with a larger chest."
    },
    {
     "text": "Classic gown with a beautiful flare.  The fit was great and it fit true to size.  If you have a large chest I recommend going one size up.  Overall, this dress was beautiful and I felt amazing in it the whole night.",
     "fit": "small",
     "quote": "If you have a large chest I recommend going one size up.",
     "causes": [
      "other"
     ],
     "fix": "Consider adding a note recommending customers with larger chests size up."
    },
    {
     "text": "Perfect for med school formal. For reference, I'm 5'8'', 125 lbs with 32A-34A bust, 25-26'' waist and 35-36'' hips. The 2L was really great, although it could have been more fitted in the waist and top. I could not have gotten by without 3-4'' heels. I probably should have ordered 0L as a backup instead of 4L, but overall cannot complain!",
     "fit": "small",
     "quote": "The 2L was really great",
     "causes": [
      "length"
     ],
     "fix": "Consider recommending heels for the best length and suggesting customers who prefer a more fitted look order a size down."
    }
   ]
  },
  {
   "item": "1146287",
   "category": "gown",
   "n_reviews": 164,
   "sampled": 60,
   "true_small": 0.11585365853658537,
   "true_large": 0.07926829268292683,
   "pred_small": 0.11666666666666667,
   "pred_large": 0.08333333333333333,
   "kw_small": 0.15,
   "kw_large": 0.06666666666666667,
   "causes": {
    "length": 0.2833333333333333,
    "other": 0.1,
    "comfort": 0.08333333333333333,
    "fabric_quality": 0.03333333333333333,
    "style_vs_photo": 0.016666666666666666
   },
   "report": {
    "size_note": "Runs small: most customers size up one.",
    "listing_fix": "Customers report this item runs small, especially in the waist and rib cage area. Consider sizing up for a more comfortable fit.",
    "photo_to_add": "",
    "headline": "Small Sizing, Size Up Recommended"
   },
   "examples": [
    {
     "text": "GREAT FOR GALA don't wear a padded bar. it fits nicely and super slim waist.  I got so many compliments with this dress. \npick a larger size if you don't want the waist area to be tight.",
     "fit": "small",
     "quote": "pick a larger size if you don't want the waist area to be tight",
     "causes": [],
     "fix": "Consider suggesting customers size up if they prefer a looser fit around the waist."
    },
    {
     "text": "In love with this dress!!! This dress is my favorite RTR pick hands down.  I received tons of compliments all night.  I did not want to send it back!!!   I ordered a 0 and a 2 - the 0 fit better and didn't have to wear a bra.   Not one wrinkle on this dress.  LOVE LOVE LOVE!!!",
     "fit": "small",
     "quote": "the 0 fit better",
     "causes": [],
     "fix": "Consider recommending customers order their usual size, as it may run slightly small."
    },
    {
     "text": "Elegant and perfect for a wedding I had several compliments and felt really pretty in the dress. I did not fit in my normal size and had to wear the 12. It was sent to me with the front seam torn and continued to pull apart throughout the evening to the point where I had to wear a different dress at the end.",
     "fit": "small",
     "quote": "I did not fit in my normal size and had to wear the 12",
     "causes": [
      "fabric_quality",
      "other"
     ],
     "fix": "Consider adding a note about sizing up, as this dress may run small."
    },
    {
     "text": "Overall it was a gorgeous dress and I would absolutely get it again. Tons of compliments. :) I ordered the 6R and 8R as backup. They fit nearly identical. The only difference to me was the 8R had more room in the bust. Both were pretty snug in the waist and, again, the 8R felt the same in the waist as the 6R.",
     "fit": "small",
     "quote": "pretty snug in the waist",
     "causes": [
      "comfort"
     ],
     "fix": "Consider mentioning that the waist may run snug for some customers."
    }
   ]
  },
  {
   "item": "1229740",
   "category": "gown",
   "n_reviews": 207,
   "sampled": 60,
   "true_small": 0.28019323671497587,
   "true_large": 0.014492753623188406,
   "pred_small": 0.38333333333333336,
   "pred_large": 0.11666666666666667,
   "kw_small": 0.31666666666666665,
   "kw_large": 0.016666666666666666,
   "causes": {
    "length": 0.48333333333333334,
    "comfort": 0.06666666666666667,
    "zipper_or_closure": 0.05,
    "fabric_quality": 0.03333333333333333,
    "style_vs_photo": 0.016666666666666666,
    "colour_vs_photo": 0.016666666666666666
   },
   "report": {
    "size_note": "Runs small: most customers size up one.",
    "listing_fix": "This dress tends to run small, especially in the bust. We recommend sizing up for a more comfortable fit, particularly if you are between sizes or have a fuller bust.",
    "photo_to_add": "Photo of the dress on a model with measurements for bust, waist, and length.",
    "headline": "Small sizing, bust fit issues"
   },
   "examples": [
    {
     "text": "it was a wedding tight, but next size was too big",
     "fit": "small",
     "quote": "next size was too big",
     "causes": [],
     "fix": "Consider recommending that customers size down if they are between sizes."
    },
    {
     "text": "Great for black tie Great fit, very flattering.  Perfect for a black tie event.  Went with my back up size.",
     "fit": "small",
     "quote": "Went with my back up size",
     "causes": [],
     "fix": "Consider recommending customers rent or buy a backup size for a perfect fit."
    },
    {
     "text": "Meh. Not as nice looking as picture, and very tight. Weirdly short even with heels (I'm only 5'4\")   As above",
     "fit": "small",
     "quote": "very tight",
     "causes": [
      "colour_vs_photo",
      "length"
     ],
     "fix": "Consider adding a note about the garment running small and potentially sizing up."
    },
    {
     "text": "I felt (and was told all night how I look) so glamorous in this dress!  Gorgeous! The dress was very flattering - tighter on the hips so a size bigger was helpful.  The length was perfect.",
     "fit": "small",
     "quote": "a size bigger was helpful",
     "causes": [
      "length"
     ],
     "fix": "Consider mentioning that the dress may fit snugly around the hips."
    }
   ]
  },
  {
   "item": "123793",
   "category": "gown",
   "n_reviews": 1695,
   "sampled": 60,
   "true_small": 0.03716814159292035,
   "true_large": 0.08967551622418879,
   "pred_small": 0.13333333333333333,
   "pred_large": 0.06666666666666667,
   "kw_small": 0.08333333333333333,
   "kw_large": 0.03333333333333333,
   "causes": {
    "length": 0.4166666666666667,
    "comfort": 0.15,
    "colour_vs_photo": 0.05,
    "fabric_quality": 0.05,
    "other": 0.03333333333333333,
    "zipper_or_closure": 0.016666666666666666
   },
   "report": {
    "size_note": "Runs small: most customers size up one.",
    "listing_fix": "This dress tends to run small, especially in the sleeves. Consider sizing up for a more comfortable fit.",
    "photo_to_add": "Photo of the dress on a model with measurements for chest, waist, and length.",
    "headline": "Small sizing and length issues"
   },
   "examples": [
    {
     "text": "Divalicious! Ordered both the 6l & 8L decided on the 8L only because of the sleeves. On the 6L the sleeves were a little snug...I wore a regular bra and tucked in the draped part which didn't take away from the dress. I received numerous compliments even from the bride herself!",
     "fit": "small",
     "quote": "the sleeves were a little snug",
     "causes": [
      "length"
     ],
     "fix": "Consider mentioning that the sleeves may run slightly snug, especially for those with broader shoulders."
    },
    {
     "text": "So perfect for a sorority formal! I rented this dress for my sororities Red Carpet formal. I LOVED it! It was so flattering and fit like a glove. I wish I would've been able to rent the 2, but the 4 fit pretty well. My only complaint is that the sequins kind of start to rub after awhile!",
     "fit": "small",
     "quote": "I wish I would've been able to rent the 2, but the 4 fit pretty well.",
     "causes": [
      "fabric_quality"
     ],
     "fix": "Consider mentioning that the dress may run slightly small, and renters might want to size up."
    },
    {
     "text": "Gorgeous! This dress was absolutely gorgeous and it was beautifully made. Unfortunately, the other dress I rented along with it fit me so much better and was just as beautiful. Definitely would like to rent this again but in a 0P. It does have some give to it so hopefully they'll come out with a 00P ;)",
     "fit": "small",
     "quote": "fit me so much better",
     "causes": [],
     "fix": "Consider offering additional sizes, such as 00P, to accommodate a wider range of body types."
    },
    {
     "text": "So many compliments, fit perfectly! Very comfortable to wear all night. Runs short! I wore this for a bridesmaids dress. It definitely runs short so I chose L size and even that was a little short with heels. I wore my own nude bra with a backless converter that I also bought through RTR. I definitely recommend this dress! It fit like a glove, and I received compliments all night long!",
     "fit": "small",
     "quote": "It definitely runs short",
     "causes": [
      "length"
     ],
     "fix": "Consider adding a note about the dress running shorter than expected, especially for taller individuals."
    }
   ]
  },
  {
   "item": "1241304",
   "category": "gown",
   "n_reviews": 161,
   "sampled": 60,
   "true_small": 0.024844720496894408,
   "true_large": 0.12422360248447205,
   "pred_small": 0.08333333333333333,
   "pred_large": 0.2,
   "kw_small": 0.1,
   "kw_large": 0.16666666666666666,
   "causes": {
    "length": 0.3333333333333333,
    "comfort": 0.13333333333333333,
    "zipper_or_closure": 0.11666666666666667,
    "fabric_quality": 0.08333333333333333,
    "style_vs_photo": 0.05,
    "colour_vs_photo": 0.05,
    "other": 0.016666666666666666
   },
   "report": {
    "size_note": "Runs large: consider sizing down.",
    "listing_fix": "Many customers found this dress ran larger than expected, particularly in the bust and overall fit. We recommend checking the size chart carefully and considering sizing down for a more fitted look.",
    "photo_to_add": "Size chart with bust and waist measurements for each size.",
    "headline": "Larger fit, size down recommended"
   },
   "examples": [
    {
     "text": "Attended prom theme birthday party. Felt like I received my h.s prom. Loved it !  Cons: I'm small in the bust area dress was a bit lose on the strapless side but not to the point of needing alterations.\nPros: Fit perfect every where else",
     "fit": "large",
     "quote": "a bit lose on the strapless side",
     "causes": [
      "comfort"
     ],
     "fix": "Consider adding a note about potential gapping on strapless styles for those with a smaller bust."
    },
    {
     "text": "Amazing, comfortable dress! So many compliments on this dress! It was fun to wear and was really comfortable. I wear a size down because I liked the way it fit better. The dress was very flattering. I felt amazing in this dress and definitely recommend it!",
     "fit": "large",
     "quote": "I wear a size down because I liked the way it fit better.",
     "causes": [],
     "fix": "Consider suggesting customers size down for a more flattering fit."
    },
    {
     "text": "Great dress! Fun to wear. The slit up the leg makes it sassy. It worked great. I got the 6 and 8 but chose the 6 because the length was better for me. The 8 was a bit too long.  I'm not big on one shoulder dresses but this one worked great.  Overall, a great dress!",
     "fit": "large",
     "quote": "The 8 was a bit too long",
     "causes": [
      "length"
     ],
     "fix": "Consider adding a note about the length running long, especially for shorter customers."
    },
    {
     "text": "Beautiful gown! I ordered the 12L, with a 10L backup and a 14L (Just in case).  The 10L fit great,  but was a bit short, the 12L was a little roomy, but better in length, the 14L was the perfect length, but huge.  Ultimately I wore the 12L and received compliments all night.",
     "fit": "large",
     "quote": "the 12L was a little roomy",
     "causes": [
      "length"
     ],
     "fix": "Consider noting that the dress may run a bit large, especially in the bust or shoulders."
    }
   ]
  },
  {
   "item": "125564",
   "category": "gown",
   "n_reviews": 601,
   "sampled": 60,
   "true_small": 0.15806988352745424,
   "true_large": 0.10981697171381032,
   "pred_small": 0.2,
   "pred_large": 0.13333333333333333,
   "kw_small": 0.2,
   "kw_large": 0.05,
   "causes": {
    "length": 0.38333333333333336,
    "comfort": 0.18333333333333332,
    "fabric_quality": 0.05,
    "zipper_or_closure": 0.03333333333333333,
    "style_vs_photo": 0.03333333333333333,
    "other": 0.016666666666666666
   },
   "report": {
    "size_note": "Runs small: most customers size up one",
    "listing_fix": "This item has hidden boning which can make it feel snug. Consider sizing up for a more comfortable fit, especially if you prefer a looser style.",
    "photo_to_add": "Photo showing the garment being worn, with measurements of the bust, waist, and sleeve length clearly labeled.",
    "headline": "Snug fit, size up recommended"
   },
   "examples": [
    {
     "text": "I felt beautiful and go tons of compliments from people not even at the event. Fit was tight.  I opted for the 6 instead of the 4,  Stretches, so it's easy to sit in,  wore 3 inch heels until I couldn't take it anymore!",
     "fit": "small",
     "quote": "Fit was tight.",
     "causes": [],
     "fix": "Consider mentioning the garment runs slightly small, and sizing up may be necessary for a comfortable fit."
    },
    {
     "text": "Not a maternity dress I wanted to wear this for a gala event that I attended and I\u2019m 34 weeks pregnant. Unfortunately, it did not fit at all. Material does not stretch at all. I would not recommend for third trimester maternity dress.",
     "fit": "small",
     "quote": "it did not fit at all",
     "causes": [
      "fabric_quality",
      "comfort"
     ],
     "fix": "Please note that this dress does not offer any stretch and may not be suitable for later stages of pregnancy."
    },
    {
     "text": "Great service from RTR, but this dress runs SHORT!!! I am 5'6\" and the regular length didn't come close to reaching my ankles.  I'm glad I ordered a backup dress and sizes.  Also, my arms aren't terribly muscular, but the \"sleeves\" on this were quite snug.",
     "fit": "small",
     "quote": "sleeves on this were quite snug",
     "causes": [
      "length"
     ],
     "fix": "Consider adding a note about the sleeves running snug, especially for those with more muscular arms."
    },
    {
     "text": "Very disappointing Icould not get it to zip up. Very disappointing I got 2 sizes larger than what I wear because it was all they had in stock for my event. When the dress arrived I  could not get it to zip up. I ended up having to go out and find a whole new dress before my event.",
     "fit": "small",
     "quote": "I could not get it to zip up",
     "causes": [],
     "fix": "Consider adding a note about sizing running small and recommending customers to size up."
    }
   ]
  },
  {
   "item": "1295171",
   "category": "sheath",
   "n_reviews": 161,
   "sampled": 60,
   "true_small": 0.391304347826087,
   "true_large": 0.0,
   "pred_small": 0.4166666666666667,
   "pred_large": 0.05,
   "kw_small": 0.2833333333333333,
   "kw_large": 0.016666666666666666,
   "causes": {
    "fabric_quality": 0.36666666666666664,
    "comfort": 0.21666666666666667,
    "length": 0.16666666666666666,
    "colour_vs_photo": 0.06666666666666667,
    "other": 0.03333333333333333,
    "style_vs_photo": 0.03333333333333333,
    "zipper_or_closure": 0.016666666666666666
   },
   "report": {
    "size_note": "Runs small: most customers size up one",
    "listing_fix": "This item tends to run smaller than expected. We recommend checking the size chart carefully and considering sizing up for a more comfortable fit, especially if you prefer a looser style.",
    "photo_to_add": "Size chart with measurements for chest, waist, and length.",
    "headline": "Small Sizing, Chest Tightness"
   },
   "examples": [
    {
     "text": "So pretty! I got the small and medium. I ended up wearing the medium because the small was too tight around my chest. The dress is so pretty. Would for sure recommend  :)",
     "fit": "small",
     "quote": "the small was too tight around my chest",
     "causes": [],
     "fix": "Consider adding a note about a snug fit in the bust and recommending sizing up for those with a larger chest."
    },
    {
     "text": "This dress didn't fit in the least - too tight in the bust, hip, thighs and way too short.  It was very pretty but too small.  I normally wear a 12 or 14 in a dress.  The XL fit like a size 10.",
     "fit": "small",
     "quote": "too small",
     "causes": [
      "length"
     ],
     "fix": "Customers who are between sizes or have a larger bust may want to size up."
    },
    {
     "text": "Perfect for the Holidays!! Wore this for a Red Dress event and got so many compliments.  The color was spectacular.  It was a bit revealing but overall I loved it.  If you are large chested, be prepared!",
     "fit": "small",
     "quote": "If you are large chested, be prepared!",
     "causes": [
      "comfort"
     ],
     "fix": "Consider adding a note about the dress running small for those with a larger bust."
    },
    {
     "text": "Perfect Vegas going out dress! Amazing dress! Perfect for a girls night out in Vegas. The sequins were a bit scratchy for dinner but otherwise it was so fun to wear. Sizing was standard or a hint on the small side.",
     "fit": "small",
     "quote": "a hint on the small side",
     "causes": [
      "fabric_quality"
     ],
     "fix": "Consider mentioning that the dress runs slightly small, and customers may want to size up."
    }
   ]
  },
  {
   "item": "1309537",
   "category": "gown",
   "n_reviews": 156,
   "sampled": 60,
   "true_small": 0.08333333333333333,
   "true_large": 0.057692307692307696,
   "pred_small": 0.08333333333333333,
   "pred_large": 0.2,
   "kw_small": 0.18333333333333332,
   "kw_large": 0.1,
   "causes": {
    "length": 0.4166666666666667,
    "fabric_quality": 0.05,
    "comfort": 0.016666666666666666
   },
   "report": {
    "size_note": "Runs large: consider sizing down.",
    "listing_fix": "This style is designed with a relaxed fit. Customers report it runs larger than expected, especially in the waist and length; consider ordering a size down for a more fitted feel.",
    "photo_to_add": "Photo of the garment on a model with measurements labeled for waist, hips, and length.",
    "headline": "Runs large",
    "headline_replaced": true
   },
   "examples": [
    {
     "text": "Perfect for a black tie wedding  It was not form fitting-loose on my waist, but very elegant.",
     "fit": "large",
     "quote": "loose on my waist",
     "causes": [
      "length"
     ],
     "fix": "Consider adding a belt recommendation to the listing to help define the waist."
    },
    {
     "text": "This dress made me feel glamorous! I originally ordered this dress in red but it was unavailable in my size so I wore the black version. I really like the cut of the dress even though it was a little big up top. I also liked the length.",
     "fit": "large",
     "quote": "it was a little big up top",
     "causes": [
      "length"
     ],
     "fix": "Consider mentioning that the dress may run slightly large in the bust."
    },
    {
     "text": "Very flattering I ordered a 12L, but they did not deliver it. Therefore, it was a bit loose around the armholes/cleavage area; I did not find out until the day before the event, so I couldn't find the proper bra in time and felt a bit unsupported. Perfect length for a 5'8\" woman with 5\" heels. Great color. Wrinkled upon delivery. Simple yet sexy.",
     "fit": "large",
     "quote": "a bit loose around the armholes/cleavage area",
     "causes": [
      "length",
      "fabric_quality"
     ],
     "fix": "Consider adding a note about potential gapping in the armhole area and recommending a supportive bra."
    },
    {
     "text": "Black Tie Wedding Beautiful, elegant dress. I planned on wearing the 4 as I have a good size \"bubble butt\".  However, the 4 was a bit baggy in the chest, whereas with the 2 I didn't have to wear a bra. Luckily the dress has a bit of stretch to it so the 2 was fine and I was able to sit comfortably. I wore 3.25 inch heels and the length was perfect.",
     "fit": "large",
     "quote": "a bit baggy in the chest",
     "causes": [
      "comfort"
     ],
     "fix": "Consider mentioning that the dress may run large in the bust and customers might want to size down."
    }
   ]
  },
  {
   "item": "132135",
   "category": "gown",
   "n_reviews": 423,
   "sampled": 60,
   "true_small": 0.05200945626477541,
   "true_large": 0.23167848699763594,
   "pred_small": 0.16666666666666666,
   "pred_large": 0.2833333333333333,
   "kw_small": 0.1,
   "kw_large": 0.16666666666666666,
   "causes": {
    "length": 0.38333333333333336,
    "comfort": 0.08333333333333333,
    "style_vs_photo": 0.06666666666666667,
    "zipper_or_closure": 0.05,
    "fabric_quality": 0.03333333333333333,
    "other": 0.016666666666666666
   },
   "report": {
    "size_note": "Runs large, especially in the bust; consider sizing down.",
    "listing_fix": "This style is generously sized, particularly in the chest area. Customers report needing to size down for a better fit, especially if you are smaller in the bust.",
    "photo_to_add": "Photo of the garment on a model with measurements labeled (bust, waist, length).",
    "headline": "Bust sizing inconsistent; runs large"
   },
   "examples": [
    {
     "text": "Classic Gown I liked it, however it ran a little big in the bust and I'm pretty busty sooo.",
     "fit": "large",
     "quote": "ran a little big in the bust",
     "causes": [
      "style_vs_photo"
     ],
     "fix": "Consider adding a note about the gown running slightly large in the bust area."
    },
    {
     "text": "Didn't end up wearing this dress. Would have been very nice if it fit. Very stretchy fabric. Too large every where on me. Wouldn't even stay up.",
     "fit": "large",
     "quote": "Too large every where on me",
     "causes": [
      "length"
     ],
     "fix": "Consider adding a note about the dress running large and recommending customers check measurements carefully."
    },
    {
     "text": "It was my son's wedding.  I got so many compliments on the dress\n It was a little too big for me.  I should have ordered the size 6.  I had to pull it up constantly",
     "fit": "large",
     "quote": "It was a little too big for me.",
     "causes": [
      "length"
     ],
     "fix": "Consider adding a note about the dress running slightly large, and recommending customers check the size chart carefully."
    },
    {
     "text": "This dress was gorgeous. A little big but really beautiful.  Dress was a little loose  mostly due to stretching, I think. Otherwise, very beautiful. Fit was pretty good. Length was perfect.",
     "fit": "large",
     "quote": "A little big",
     "causes": [
      "fabric_quality"
     ],
     "fix": "Consider mentioning that the fabric may be prone to stretching."
    }
   ]
  },
  {
   "item": "1325648",
   "category": "dress",
   "n_reviews": 218,
   "sampled": 60,
   "true_small": 0.1651376146788991,
   "true_large": 0.022935779816513763,
   "pred_small": 0.36666666666666664,
   "pred_large": 0.05,
   "kw_small": 0.4166666666666667,
   "kw_large": 0.0,
   "causes": {
    "length": 0.21666666666666667,
    "comfort": 0.16666666666666666,
    "fabric_quality": 0.1,
    "other": 0.03333333333333333,
    "style_vs_photo": 0.016666666666666666,
    "zipper_or_closure": 0.016666666666666666
   },
   "report": {
    "size_note": "Runs small: most customers size up one.",
    "listing_fix": "This item tends to run small, especially in the chest and arms. We recommend sizing up for a more comfortable fit.",
    "photo_to_add": "Photo showing the garment being zipped with a person of average build.",
    "headline": "Small fit, sizing up recommended"
   },
   "examples": [
    {
     "text": "Nice but too tight for my bust I'm a little busty and couldn't get this zipped without smushing. I'd say go up a size if you are top heavy.",
     "fit": "small",
     "quote": "couldn't get this zipped without smushing",
     "causes": [],
     "fix": "Consider recommending that customers with a larger bust size up a size."
    },
    {
     "text": "n/a It felt weirdly small around the back/bust area. I usually wear a 2 or a 4, and both wouldn't zip all the way! Still, got compliments all night.",
     "fit": "small",
     "quote": "both wouldn't zip all the way!",
     "causes": [],
     "fix": "Consider advising customers to size up, as this garment may run smaller than expected in the bust and back."
    },
    {
     "text": "Fun and Festive  I loved the print and the full skirt.. but the material had no stretch and it was tight / uncomfortable around my chest and shoulders.",
     "fit": "small",
     "quote": "it was tight / uncomfortable around my chest and shoulders",
     "causes": [
      "comfort",
      "fabric_quality"
     ],
     "fix": "Consider adding a note about the fabric lacking stretch and potentially running small in the chest and shoulders."
    },
    {
     "text": "Wore this dress to a NYE wedding it was perfect for the event!  It is a bit tight around the arms, it rubbed my arms all night to where my arms were sore next day.",
     "fit": "small",
     "quote": "a bit tight around the arms",
     "causes": [
      "comfort"
     ],
     "fix": "Consider mentioning that the dress may be snug around the arms for some wearers."
    }
   ]
  },
  {
   "item": "133584",
   "category": "dress",
   "n_reviews": 203,
   "sampled": 60,
   "true_small": 0.29064039408866993,
   "true_large": 0.009852216748768473,
   "pred_small": 0.2833333333333333,
   "pred_large": 0.05,
   "kw_small": 0.3333333333333333,
   "kw_large": 0.0,
   "causes": {
    "length": 0.21666666666666667,
    "fabric_quality": 0.16666666666666666,
    "comfort": 0.13333333333333333,
    "style_vs_photo": 0.06666666666666667,
    "other": 0.03333333333333333,
    "zipper_or_closure": 0.016666666666666666
   },
   "report": {
    "size_note": "Runs small: most customers size up one",
    "listing_fix": "Customers report this item fits tightly, especially in the sleeves. Consider sizing up for a more comfortable fit.",
    "photo_to_add": "Photo showing the garment's measurements, particularly sleeve length and chest circumference, laid flat.",
    "headline": "Small fit, size up recommended"
   },
   "examples": [
    {
     "text": "Super comfy, sleeves are very slim and I have thin arms Size up! I wore two sizes larger than I normally am because the sleeves were so tight.",
     "fit": "small",
     "quote": "Size up!",
     "causes": [],
     "fix": "Consider mentioning that the sleeves run slim and may require sizing up."
    },
    {
     "text": "Too Tight in Sleeves, A Bit Matronly The sleeves were too tight and it just made me feel a bit matronly. My husband was not a fan of the dress.",
     "fit": "small",
     "quote": "The sleeves were too tight",
     "causes": [
      "style_vs_photo",
      "comfort"
     ],
     "fix": "Consider mentioning that the sleeves may run tight for some customers."
    },
    {
     "text": "I received many compliments  about the dress. The dress fits tightly, I am a bit hippy.  The slip that is part of the dress kept slipping upward.",
     "fit": "small",
     "quote": "fits tightly",
     "causes": [
      "comfort"
     ],
     "fix": "Consider adding a note about the dress fitting snugly, especially for those with curvier figures."
    },
    {
     "text": "It was a great night with lots and lots of compliments Definitely a spanx dress. I went with the larger size because of the length in the arms as well as the hemline.",
     "fit": "small",
     "quote": "I went with the larger size because of the length in the arms as well as the hemline.",
     "causes": [
      "length"
     ],
     "fix": "Consider adding a note about the dress running long, especially in the sleeves."
    }
   ]
  },
  {
   "item": "1337205",
   "category": "gown",
   "n_reviews": 194,
   "sampled": 60,
   "true_small": 0.07731958762886598,
   "true_large": 0.12886597938144329,
   "pred_small": 0.13333333333333333,
   "pred_large": 0.35,
   "kw_small": 0.16666666666666666,
   "kw_large": 0.16666666666666666,
   "causes": {
    "length": 0.38333333333333336,
    "zipper_or_closure": 0.16666666666666666,
    "style_vs_photo": 0.15,
    "comfort": 0.08333333333333333,
    "fabric_quality": 0.05,
    "colour_vs_photo": 0.03333333333333333,
    "other": 0.016666666666666666
   },
   "report": {
    "size_note": "Runs large: consider sizing down, especially in the bust.",
    "listing_fix": "This style is cut generously, and many customers found it loose or large in the bust. We recommend checking the size chart carefully and considering sizing down for a more fitted look.",
    "photo_to_add": "Size chart with bust and waist measurements clearly labeled.",
    "headline": "Bust and Length Issues"
   },
   "examples": [
    {
     "text": "Got a lot of nice compliments on the dress Length was good, top was a little big but worked",
     "fit": "large",
     "quote": "top was a little big but worked",
     "causes": [
      "length"
     ],
     "fix": "Consider mentioning that the top may run slightly large."
    },
    {
     "text": "I ended up NOT wearing this dress  the bust was HUGE! It fit everywhere else but way to big on top, I am a 36D.",
     "fit": "large",
     "quote": "the bust was HUGE!",
     "causes": [],
     "fix": "Consider adding a note about the dress running large in the bust, especially for those with a smaller chest size."
    },
    {
     "text": "Way too big. This dress is way too big for a person with a petite frame\u2013\u2013the top didn't fit at all, and the material on the skirt was far too voluminous.",
     "fit": "large",
     "quote": "Way too big",
     "causes": [
      "style_vs_photo"
     ],
     "fix": "Consider adding a note about the dress running large, especially for those with a petite frame."
    },
    {
     "text": "It was a great dress. received many compliments..................voted top dress for Prom! top may be a bit big/loose but once pinned looked great.\nVery Classic",
     "fit": "large",
     "quote": "top may be a bit big/loose",
     "causes": [
      "style_vs_photo"
     ],
     "fix": "Consider mentioning that pinning may be needed for a more fitted look."
    }
   ]
  },
  {
   "item": "134015",
   "category": "gown",
   "n_reviews": 435,
   "sampled": 60,
   "true_small": 0.04367816091954023,
   "true_large": 0.1793103448275862,
   "pred_small": 0.13333333333333333,
   "pred_large": 0.2833333333333333,
   "kw_small": 0.1,
   "kw_large": 0.1,
   "causes": {
    "length": 0.26666666666666666,
    "zipper_or_closure": 0.16666666666666666,
    "comfort": 0.1,
    "style_vs_photo": 0.06666666666666667,
    "other": 0.05,
    "fabric_quality": 0.016666666666666666,
    "colour_vs_photo": 0.016666666666666666
   },
   "report": {
    "size_note": "Runs small: most customers size up one or two.",
    "listing_fix": "This style runs larger in the chest and smaller in the hips. Consider sizing up, especially if you are smaller in the bust.",
    "photo_to_add": "Photo of the garment being zipped up on a model with a common bust size.",
    "headline": "Size issues: small chest, large hips"
   },
   "examples": [
    {
     "text": "Beautiful, but too big! Dress was too big, went for the smaller size.",
     "fit": "large",
     "quote": "too big",
     "causes": [],
     "fix": "Consider recommending customers size down for a more accurate fit."
    },
    {
     "text": "Amazing dress! Runs a bit big and definitely low cut, but is exceptionally comfortable!",
     "fit": "large",
     "quote": "Runs a bit big",
     "causes": [
      "comfort"
     ],
     "fix": "Consider adding a note to the listing advising customers that the dress runs large."
    },
    {
     "text": "I looked fab It was very loose on me, but worked well since I was moving a lot and dancing.",
     "fit": "large",
     "quote": "very loose on me",
     "causes": [],
     "fix": "Consider adding a note about the garment being roomy or recommending sizing down for a more fitted look."
    },
    {
     "text": "Dress was beautiful. My bust size made it gap a little under the arms and it about 1/2 inch too long for me (5ft 4in) with 3-4 inch heels on.",
     "fit": "large",
     "quote": "gap a little under the arms",
     "causes": [
      "length"
     ],
     "fix": "Consider adding a note about potential gapping for those with a larger bust."
    }
   ]
  },
  {
   "item": "137585",
   "category": "sheath",
   "n_reviews": 1090,
   "sampled": 60,
   "true_small": 0.06422018348623854,
   "true_large": 0.08440366972477065,
   "pred_small": 0.13333333333333333,
   "pred_large": 0.21666666666666667,
   "kw_small": 0.08333333333333333,
   "kw_large": 0.11666666666666667,
   "causes": {
    "length": 0.31666666666666665,
    "fabric_quality": 0.15,
    "style_vs_photo": 0.08333333333333333,
    "other": 0.06666666666666667,
    "comfort": 0.05,
    "zipper_or_closure": 0.05,
    "colour_vs_photo": 0.016666666666666666
   },
   "report": {
    "size_note": "Runs large: consider sizing down.",
    "listing_fix": "This dress has a relaxed fit and tends to run larger than expected. We recommend checking the size chart carefully and considering ordering one size smaller for a more fitted look.",
    "photo_to_add": "Size chart with measurements for bust, waist, and hips.",
    "headline": "Sizing issues: runs large"
   },
   "examples": [
    {
     "text": "I'm 5'10 and this dress was almost too short, but I got tons of compliments on it all night.  Pro's: back of the dress is gorgeous",
     "fit": "large",
     "quote": "almost too short",
     "causes": [
      "length"
     ],
     "fix": "Consider adding a note about the dress's length, especially for taller customers."
    },
    {
     "text": "It is a beautiful Dress This was a nice dress but the shoulders were really big on me! Which is weird because I have wide shoulders. Would recommend ordering a smaller size.",
     "fit": "large",
     "quote": "ordering a smaller size",
     "causes": [],
     "fix": "Consider adding a note about the shoulders running large, especially for those with broader shoulders."
    },
    {
     "text": "Got endless compliments on this dress! It's classy and beautiful. Fits true to size, not a form fitting dressing. The open back can be a bit of a problem as the sides are slightly loose creating an open space.",
     "fit": "large",
     "quote": "The open back can be a bit of a problem as the sides are slightly loose creating an open space.",
     "causes": [
      "style_vs_photo"
     ],
     "fix": "Consider mentioning the looser sides near the open back in the description to manage expectations."
    },
    {
     "text": "Beautiful lace overlay Fit well, a bit short when sitting.  size 6 was too loose due to the open back (probably not an issue if you are a bit bustier). Minor damage to the lace on the back, but was not very noticeable. Gorgeous silver lace that photographs beautifully.",
     "fit": "large",
     "quote": "size 6 was too loose",
     "causes": [
      "length",
      "fabric_quality"
     ],
     "fix": "Consider adding a note about the dress running large, especially for those with a smaller bust."
    }
   ]
  },
  {
   "item": "144051",
   "category": "sheath",
   "n_reviews": 492,
   "sampled": 60,
   "true_small": 0.11382113821138211,
   "true_large": 0.04878048780487805,
   "pred_small": 0.21666666666666667,
   "pred_large": 0.06666666666666667,
   "kw_small": 0.2833333333333333,
   "kw_large": 0.03333333333333333,
   "causes": {
    "length": 0.21666666666666667,
    "fabric_quality": 0.15,
    "comfort": 0.15,
    "zipper_or_closure": 0.05,
    "style_vs_photo": 0.016666666666666666,
    "other": 0.016666666666666666,
    "colour_vs_photo": 0.016666666666666666
   },
   "report": {
    "size_note": "Runs small: most customers size up one",
    "listing_fix": "This style runs smaller than expected, especially in the sleeves and midsection. Consider sizing up for a more comfortable fit.",
    "photo_to_add": "Photo of the garment being worn, showing the fit across the shoulders and arms.",
    "headline": "Small fit, sizing up recommended"
   },
   "examples": [
    {
     "text": "Very pretty dress! Beautiful dress but it was a little too tight in the midsection. The length was perfect and the quality was good.",
     "fit": "small",
     "quote": "a little too tight in the midsection",
     "causes": [
      "length",
      "fabric_quality"
     ],
     "fix": "Consider adding a note about the dress fitting snugly in the midsection and recommending customers check measurements carefully."
    },
    {
     "text": "I got compliments on this dress all night - fabulous color and so easy to dance in. The 18 would have worked too - but the 20 was a little more forgiving.",
     "fit": "small",
     "quote": "the 20 was a little more forgiving",
     "causes": [],
     "fix": "Consider suggesting customers size up if they are between sizes or prefer a more relaxed fit."
    },
    {
     "text": "Worked with cowboy boots for a wedding on a ranch I sized up to have more room for dancing -- length was just right, not too short. Berry color was awesome!",
     "fit": "small",
     "quote": "I sized up to have more room for dancing",
     "causes": [],
     "fix": "Consider mentioning that sizing up may be needed for those who plan to dance."
    },
    {
     "text": "Great dress! I loved this dress!  The sleeves were a little tight and itchy but that was not a deal breaker.  I found the 6 to be a little too long on me, even though it fit better everywhere else.  So I went with the size 4 because I liked the length, even though it was pretty snug.  Overall a success!",
     "fit": "small",
     "quote": "a little too long on me",
     "causes": [
      "length"
     ],
     "fix": "Consider adding a note about the dress running long, especially for shorter customers."
    }
   ]
  },
  {
   "item": "1446293",
   "category": "gown",
   "n_reviews": 181,
   "sampled": 60,
   "true_small": 0.12154696132596685,
   "true_large": 0.13259668508287292,
   "pred_small": 0.26666666666666666,
   "pred_large": 0.4,
   "kw_small": 0.21666666666666667,
   "kw_large": 0.2,
   "causes": {
    "comfort": 0.31666666666666665,
    "length": 0.2833333333333333,
    "fabric_quality": 0.11666666666666667,
    "zipper_or_closure": 0.1,
    "style_vs_photo": 0.08333333333333333,
    "other": 0.016666666666666666,
    "colour_vs_photo": 0.016666666666666666
   },
   "report": {
    "size_note": "Runs large: consider sizing down.",
    "listing_fix": "Many customers found this item loose in the chest and around the armholes. Consider checking measurements carefully and comparing them to a similar garment you own.",
    "photo_to_add": "A photo with measurements of the chest and armhole circumference laid flat.",
    "headline": "Runs large, especially in the chest"
   },
   "examples": [
    {
     "text": "Fun, tons of compliments, great color! Gappy in the bust (I'm a B-cup) but easily fixable with some strategically placed safety pins.",
     "fit": "large",
     "quote": "Gappy in the bust",
     "causes": [
      "zipper_or_closure"
     ],
     "fix": "Consider adding a note about potential gapping for those with smaller busts and suggesting safety pins for a more secure fit."
    },
    {
     "text": "Easy to wear beautiful color I wore this dress to a gala.  Great dress, easy to wear.  The top runs a tad large so fashion tape is a must.  Pockets are great for a phone.",
     "fit": "large",
     "quote": "The top runs a tad large",
     "causes": [
      "other"
     ],
     "fix": "Consider mentioning that the top may run slightly large and fashion tape could be helpful."
    },
    {
     "text": "Beautiful color I loved the color, the material was heavy and beautiful but puckered out around the chest in a weird way and had to be secured to not look funny.  I loved how it flowed when I walked.  It was also a bit loose.",
     "fit": "large",
     "quote": "It was also a bit loose.",
     "causes": [
      "fabric_quality",
      "comfort"
     ],
     "fix": "Consider adding a note about the fit being slightly loose around the chest and recommending pinning or tailoring for a more secure fit."
    },
    {
     "text": "Flattering dress. I have an hourglass body shape, with a larger bust, and this dress was actually almost too big in the chest but was still able to wear it confidently.  I loved the blue color and received many compliments all evening.",
     "fit": "large",
     "quote": "almost too big in the chest",
     "causes": [
      "comfort"
     ],
     "fix": "Consider recommending that customers with a larger bust size may want to size down."
    }
   ]
  },
  {
   "item": "1498329",
   "category": "gown",
   "n_reviews": 198,
   "sampled": 60,
   "true_small": 0.1717171717171717,
   "true_large": 0.030303030303030304,
   "pred_small": 0.23333333333333334,
   "pred_large": 0.13333333333333333,
   "kw_small": 0.26666666666666666,
   "kw_large": 0.08333333333333333,
   "causes": {
    "length": 0.38333333333333336,
    "zipper_or_closure": 0.23333333333333334,
    "colour_vs_photo": 0.06666666666666667,
    "other": 0.03333333333333333,
    "comfort": 0.03333333333333333
   },
   "report": {
    "size_note": "Runs small: most customers size up one",
    "listing_fix": "Sizing up is recommended, especially if you are between sizes or have a larger bust. Please check the size chart carefully before ordering.",
    "photo_to_add": "",
    "headline": "Small Sizing, Bust Fit Issues"
   },
   "examples": [
    {
     "text": "Beautiful dress!   I am 5'7, 135 lbs and the regular 6 was a better fit than the long 4.",
     "fit": "small",
     "quote": "the regular 6 was a better fit than the long 4",
     "causes": [],
     "fix": "Consider recommending that customers size up if they are between sizes."
    },
    {
     "text": "#michelleobamavibes Beautiful dress. Very light. Very airy. Zipper does suck but was fine when I went a size up. Got so many compliments that I look like michelle obama so there's that. This was my first time renting and I' will definitely do it again",
     "fit": "small",
     "quote": "when I went a size up",
     "causes": [
      "zipper_or_closure"
     ],
     "fix": "Consider reinforcing or replacing the zipper to ensure a smoother closure."
    },
    {
     "text": "Felt like a princess! I loved this dress! As others have said, it is pretty warm. A slit would have been a nice detail, but its still a gorgeous gown. The pockets are fantastic! This dress has NO stretch, so if you have a large chest, consider sizing up.",
     "fit": "small",
     "quote": "if you have a large chest, consider sizing up",
     "causes": [
      "other"
     ],
     "fix": "Consider sizing up if you have a larger chest, as this dress has no stretch."
    },
    {
     "text": "Gown was beautiful.  Fit: I selected a 6L and an 8R and wore the 8R because the 6 was too tight for me in the bust area. \nPros: Gown is beautiful. Length was great. Fit my body type perfectly. \nCons: None in my opinion\nOTHER: Dress color is not as dark red as it appears in the pictures.",
     "fit": "small",
     "quote": "the 6 was too tight for me in the bust area",
     "causes": [
      "colour_vs_photo"
     ],
     "fix": "Consider adding a note about potential fit issues in the bust for those with a larger bust size."
    }
   ]
  },
  {
   "item": "151551",
   "category": "sheath",
   "n_reviews": 190,
   "sampled": 60,
   "true_small": 0.031578947368421054,
   "true_large": 0.17894736842105263,
   "pred_small": 0.06666666666666667,
   "pred_large": 0.21666666666666667,
   "kw_small": 0.11666666666666667,
   "kw_large": 0.05,
   "causes": {
    "length": 0.15,
    "style_vs_photo": 0.06666666666666667,
    "comfort": 0.06666666666666667,
    "fabric_quality": 0.05,
    "zipper_or_closure": 0.03333333333333333,
    "colour_vs_photo": 0.016666666666666666,
    "other": 0.016666666666666666
   },
   "report": {
    "size_note": "Runs large: consider sizing down.",
    "listing_fix": "This dress has a relaxed fit and tends to run larger than expected. We recommend checking the size chart carefully and considering ordering a size down for a more fitted look.",
    "photo_to_add": "Size chart with measurements for bust, waist, and hips.",
    "headline": "Size runs large; check measurements"
   },
   "examples": [
    {
     "text": "Runs pretty large I didn't end up wearing this dress although the fabric felt comfortable. It swallowed me up. Too long and wide.",
     "fit": "large",
     "quote": "Runs pretty large",
     "causes": [
      "length",
      "comfort"
     ],
     "fix": "Consider adding a note to the listing advising customers to size down for a more fitted look."
    },
    {
     "text": "Nice dress, flexible fabric. It was a nice dress, but I may be running closer to a size 16, so I had to pull the skirt down throughout the night.",
     "fit": "large",
     "quote": "I had to pull the skirt down throughout the night",
     "causes": [
      "length"
     ],
     "fix": "Consider adding a note about the skirt length and potential need for adjustments for those closer to a size 16."
    },
    {
     "text": "I actually rented this dress twice for 2 separate weddings! I absolutely loved it!  I wore the size 4 but I felt that I could have worn the size 2 - there is a lot of give in the dress.",
     "fit": "large",
     "quote": "I could have worn the size 2",
     "causes": [],
     "fix": "Consider suggesting renters size down if they are between sizes."
    },
    {
     "text": "beautiful neckline and front split- beautiful but conservative- good for work event-simply beautiful fit well all around a bit big in the waist but a size small would have been too tight in hips-",
     "fit": "large",
     "quote": "a bit big in the waist",
     "causes": [],
     "fix": "Consider mentioning that the waist may run a little large for some body types."
    }
   ]
  },
  {
   "item": "1515649",
   "category": "dress",
   "n_reviews": 205,
   "sampled": 60,
   "true_small": 0.16585365853658537,
   "true_large": 0.07317073170731707,
   "pred_small": 0.36666666666666664,
   "pred_large": 0.11666666666666667,
   "kw_small": 0.23333333333333334,
   "kw_large": 0.08333333333333333,
   "causes": {
    "fabric_quality": 0.2,
    "comfort": 0.16666666666666666,
    "style_vs_photo": 0.1,
    "other": 0.05,
    "length": 0.05,
    "colour_vs_photo": 0.03333333333333333,
    "zipper_or_closure": 0.016666666666666666
   },
   "report": {
    "size_note": "Runs small: most customers size up one",
    "listing_fix": "This item tends to run smaller than expected. We recommend checking the size chart carefully and considering sizing up for a more comfortable fit, especially if you are between sizes.",
    "photo_to_add": "Size chart with measurements for each size.",
    "headline": "Small sizing is a common issue"
   },
   "examples": [
    {
     "text": "I LOVED this dress.  It felt good to wear and it got a million compliments. I got a medium and a large and the large was a little tight--but I did it.",
     "fit": "small",
     "quote": "the large was a little tight",
     "causes": [],
     "fix": "Consider suggesting customers size up if they are between sizes."
    },
    {
     "text": "Very pretty dress Very pretty dress. It fits a little snugger in the hips and tummy than I wanted it to, so just make sure you have a pretty flat tummy if you want to wear this.",
     "fit": "small",
     "quote": "fits a little snugger in the hips and tummy",
     "causes": [],
     "fix": "Consider adding a note about the dress fitting snugly in the hip and tummy area."
    },
    {
     "text": "Beautiful dress, but I couldn't wear it Lining in right breast was sticking out.  I couldn't wear it.  Also, the dress didn't sit right on my shoulders.  I was pretty disappointed.",
     "fit": "small",
     "quote": "I couldn't wear it",
     "causes": [
      "fabric_quality",
      "comfort"
     ],
     "fix": "Consider reinforcing the lining or adjusting the shoulder seams for a better fit."
    },
    {
     "text": "I wore this dress to a pageant to cheer on my friend who competed and I got compliments ALL night!!! Fit is kinda tight, i recommend going one size up. hard to get into because of the delicate beading but overall definitely worth it!!!",
     "fit": "small",
     "quote": "i recommend going one size up",
     "causes": [
      "zipper_or_closure"
     ],
     "fix": "Consider advising customers to size up for a more comfortable fit, especially due to the delicate beading."
    }
   ]
  },
  {
   "item": "154823",
   "category": "dress",
   "n_reviews": 163,
   "sampled": 60,
   "true_small": 0.10429447852760736,
   "true_large": 0.03680981595092025,
   "pred_small": 0.2,
   "pred_large": 0.06666666666666667,
   "kw_small": 0.11666666666666667,
   "kw_large": 0.06666666666666667,
   "causes": {
    "comfort": 0.13333333333333333,
    "length": 0.13333333333333333,
    "colour_vs_photo": 0.08333333333333333,
    "fabric_quality": 0.05,
    "style_vs_photo": 0.03333333333333333,
    "zipper_or_closure": 0.03333333333333333,
    "other": 0.016666666666666666
   },
   "report": {
    "size_note": "Runs small: most customers size up one",
    "listing_fix": "Sizing is inconsistent; consider ordering one size larger than your usual size. Please see our size chart for detailed measurements.",
    "photo_to_add": "Size chart with measurements for bust, waist, and hips.",
    "headline": "Sizing issues are common"
   },
   "examples": [
    {
     "text": "This is absolutely gorgeous, and I got tons of compliments! Stunning I am very busty (32DDD) so I couldn't fit into my normal size 2. Very small throughout the top. Overall a beautiful fit.",
     "fit": "small",
     "quote": "I couldn't fit into my normal size 2",
     "causes": [],
     "fix": "Consider recommending that bustier customers size up."
    },
    {
     "text": "JUST SWELL  Great dress, ran a little on the small side in the bust and was forced to wear the back up size but looked amazing. I have absolutely no curves in my torso at all and this gave me some shape",
     "fit": "small",
     "quote": "ran a little on the small side in the bust",
     "causes": [],
     "fix": "Consider adding a note to the listing suggesting customers with a smaller bust may want to size up."
    },
    {
     "text": "Wore this out in Vegas for my birthday, and it was the perfect party dress! Tight across the bust (and that's saying something with my build!), so I sized up. Other than that, it was super flattering, and such a fun dress (loved the fit and flare skirt!).",
     "fit": "small",
     "quote": "Tight across the bust...so I sized up.",
     "causes": [],
     "fix": "Consider adding a note about the dress potentially running small in the bust."
    },
    {
     "text": "Low-cut but very flattering I rented this for a company holiday party and ended up going with a backup dress because it was too low-cut in the front. If it hadn't been for a party of coworkers I would have rocked this - it's so flattering, and it's easy to wear with a regular bra with a little plunge! And the best part - it has pockets!! I usually wear an 8 but this fit perfectly in a 6.",
     "fit": "small",
     "quote": "this fit perfectly in a 6",
     "causes": [],
     "fix": "Consider mentioning the dress runs a bit small, and customers may want to size down."
    }
   ]
  },
  {
   "item": "155735",
   "category": "dress",
   "n_reviews": 167,
   "sampled": 60,
   "true_small": 0.041916167664670656,
   "true_large": 0.1377245508982036,
   "pred_small": 0.1,
   "pred_large": 0.16666666666666666,
   "kw_small": 0.1,
   "kw_large": 0.1,
   "causes": {
    "length": 0.2,
    "fabric_quality": 0.13333333333333333,
    "style_vs_photo": 0.03333333333333333,
    "zipper_or_closure": 0.016666666666666666,
    "comfort": 0.016666666666666666
   },
   "report": {
    "size_note": "Runs large: most customers size down one.",
    "listing_fix": "This dress tends to run a bit large, especially for those with a larger bust. Consider ordering one size smaller than your usual size for a better fit.",
    "photo_to_add": "",
    "headline": "Size inconsistent, runs large"
   },
   "examples": [
    {
     "text": "got a lot of compliments the dress was a little loose\nnormally waer a 6 and the 4 was still a little big",
     "fit": "large",
     "quote": "a little big",
     "causes": [],
     "fix": "Consider sizing down for a more fitted look."
    },
    {
     "text": "Wore this to a wedding! Runs a little big and was a little long. Otherwise really pretty dress and super flattering!",
     "fit": "large",
     "quote": "Runs a little big",
     "causes": [
      "length"
     ],
     "fix": "Consider adding a note to the listing suggesting customers may want to size down."
    },
    {
     "text": "Dress was perfect for holiday party! Fit was a little large, but my backup size was not available.  Perfect for my office holiday party!",
     "fit": "large",
     "quote": "a little large",
     "causes": [],
     "fix": "Consider suggesting customers size down if they prefer a more fitted look."
    },
    {
     "text": "Great dress! Loved the dress and the fit! The 2 was just a tad too big and the 0 just looked much better on me.  I wore it for a medical school formal.",
     "fit": "large",
     "quote": "a tad too big",
     "causes": [],
     "fix": "Consider recommending that customers size down for a more tailored fit."
    }
   ]
  },
  {
   "item": "160612",
   "category": "dress",
   "n_reviews": 240,
   "sampled": 60,
   "true_small": 0.03333333333333333,
   "true_large": 0.058333333333333334,
   "pred_small": 0.08333333333333333,
   "pred_large": 0.1,
   "kw_small": 0.11666666666666667,
   "kw_large": 0.0,
   "causes": {
    "length": 0.18333333333333332,
    "fabric_quality": 0.08333333333333333,
    "colour_vs_photo": 0.08333333333333333,
    "comfort": 0.08333333333333333,
    "style_vs_photo": 0.03333333333333333,
    "other": 0.016666666666666666
   },
   "report": {
    "size_note": "Runs large: consider sizing down.",
    "listing_fix": "This dress tends to run larger than expected. Please check the size chart carefully and consider ordering a size down for a more accurate fit.",
    "photo_to_add": "Size chart with measurements for each size.",
    "headline": "Size runs large; shoulder gapping"
   },
   "examples": [
    {
     "text": "Tons of complements on my bachelorette, fit perfectly, great fabric, in love!  I'm usually 4 but 2 fit better. The dress is great for any party event! Loved wearing it. Made me feel special.",
     "fit": "large",
     "quote": "I'm usually 4 but 2 fit better.",
     "causes": [],
     "fix": "Consider recommending that customers size down from their usual size."
    },
    {
     "text": "The PERFECT address for my birthday party!!! I received so many compliments and felt beautiful! Cold have worn the 2 or the 4, went with the 4 as the 2 was cut too high in the armpit and the sequins were scratching me. Dress was comfortable, and just gorgeous",
     "fit": "large",
     "quote": "Cold have worn the 2 or the 4",
     "causes": [
      "fabric_quality"
     ],
     "fix": "Consider mentioning the sizing runs large or that the armholes are cut higher than expected."
    },
    {
     "text": "I rented this dress for my Birthday and it was beautiful!  Everyone loved it :)  It fit well (gapped a bit in the shoulder, but I'm really short) and was perfectly sparkly for a Birthday celebration.  People complemented me all night on it and I loved the dress.",
     "fit": "large",
     "quote": "gapped a bit in the shoulder",
     "causes": [
      "length"
     ],
     "fix": "Consider noting that the dress may gap slightly in the shoulders for shorter individuals."
    },
    {
     "text": "This dress turned heads everywhere I went! I tried both the 0 and 2 since I wear both sizes pretty regularly. Both sizes zipped pretty well but I felt like the larger size fell a lot more attractively and gave me a little more room to eat and drink whatever I wanted.",
     "fit": "large",
     "quote": "the larger size fell a lot more attractively",
     "causes": [],
     "fix": "Consider mentioning that the dress may run a bit small, and sizing up could provide a more comfortable and flattering fit."
    }
   ]
  },
  {
   "item": "164593",
   "category": "dress",
   "n_reviews": 248,
   "sampled": 60,
   "true_small": 0.23790322580645162,
   "true_large": 0.016129032258064516,
   "pred_small": 0.3333333333333333,
   "pred_large": 0.1,
   "kw_small": 0.31666666666666665,
   "kw_large": 0.05,
   "causes": {
    "fabric_quality": 0.3333333333333333,
    "comfort": 0.23333333333333334,
    "length": 0.2,
    "zipper_or_closure": 0.16666666666666666,
    "other": 0.08333333333333333,
    "style_vs_photo": 0.05,
    "colour_vs_photo": 0.016666666666666666
   },
   "report": {
    "size_note": "Runs small: most customers size up one",
    "listing_fix": "Customers report this item runs small, especially in the bust. Consider sizing up for a more comfortable fit.",
    "photo_to_add": "Photo showing the garment being zipped with a model's posture.",
    "headline": "Small fit, bust tightness"
   },
   "examples": [
    {
     "text": "Runs small; especially if you are larger in the bust area.  Also sequins could have been itchy. Probably wouldn't rent this\u2026",
     "fit": "small",
     "quote": "Runs small; especially if you are larger in the bust area",
     "causes": [
      "fabric_quality"
     ],
     "fix": "Consider sizing up, especially for those with a larger bust."
    },
    {
     "text": "Gold Sequin Stunner I loved this dress. It was a snug fit. I didn't wear a bra with it and was fine. The material has sequins so it is a little uncomfortable and itchy around the armpits.",
     "fit": "small",
     "quote": "It was a snug fit.",
     "causes": [
      "fabric_quality",
      "comfort"
     ],
     "fix": "Consider mentioning the sequin fabric may cause slight discomfort or itching, especially under the arms."
    },
    {
     "text": "Knocking the socks off my amazing Airman! The dress was amazing. I was a little scratched up under the arms from my arms rubbing on the material but over all I loved it. A little tight in the back area but the midsection was true to size. The dress is prettier in person for sure!",
     "fit": "small",
     "quote": "A little tight in the back area",
     "causes": [
      "comfort"
     ],
     "fix": "Consider adding a note about the dress potentially running slightly tight in the back."
    },
    {
     "text": "Great Holiday dress! I rented this dress for my work Christmas party.  It was very cute!  I usually wear a 4, but decided to wear the 6...the 4 was just a little to tight and short.  The fabric is great..very festive!  Although the sequins did rub on my arms, I didn't mind because the dress was so cute!",
     "fit": "small",
     "quote": "the 4 was just a little to tight and short",
     "causes": [
      "length"
     ],
     "fix": "Consider noting that the dress runs slightly small and may be shorter than expected."
    }
   ]
  },
  {
   "item": "167112",
   "category": "dress",
   "n_reviews": 156,
   "sampled": 60,
   "true_small": 0.16666666666666666,
   "true_large": 0.01282051282051282,
   "pred_small": 0.3333333333333333,
   "pred_large": 0.06666666666666667,
   "kw_small": 0.3,
   "kw_large": 0.03333333333333333,
   "causes": {
    "comfort": 0.16666666666666666,
    "length": 0.13333333333333333,
    "fabric_quality": 0.13333333333333333,
    "style_vs_photo": 0.05,
    "zipper_or_closure": 0.016666666666666666,
    "colour_vs_photo": 0.016666666666666666
   },
   "report": {
    "size_note": "Runs small: most customers size up one",
    "listing_fix": "This style runs smaller than expected, especially in the bust and shoulders. We recommend checking the size chart carefully and considering sizing up for a more comfortable fit.",
    "photo_to_add": "Size chart with measurements for bust, waist, and length.",
    "headline": "Small fit, size up recommended"
   },
   "examples": [
    {
     "text": "How easy it was to get a dress for my event. Dress was gorgeous, the sizing just ran a little small.",
     "fit": "small",
     "quote": "sizing just ran a little small",
     "causes": [],
     "fix": "Consider adding a note to the listing advising customers to size up."
    },
    {
     "text": "Tight on top; loose in midriff  Not worn, dress was too tight on shoulders but too loose around my stomach. Uncomfortable",
     "fit": "small",
     "quote": "dress was too tight on shoulders",
     "causes": [
      "comfort"
     ],
     "fix": "Consider adding a note about the dress fitting snugly in the shoulders."
    },
    {
     "text": "Beautiful dress\n I have broad shoulders so I choose to wear a size larger than I normally wear.  The lace top was tight on me but otherwise the dress was very comfortable.",
     "fit": "small",
     "quote": "The lace top was tight on me",
     "causes": [
      "comfort"
     ],
     "fix": "Consider mentioning that the lace top may fit snugly, especially for those with broader shoulders."
    },
    {
     "text": "Great experience! Loved the dress. Loved the dress! It was fitted but still classy. I'm usually a 4 but I ended up wearing a 6. I recommend ordering a size bigger than you typically wear.",
     "fit": "small",
     "quote": "I recommend ordering a size bigger than you typically wear.",
     "causes": [],
     "fix": "Consider adding a note to the listing recommending customers size up."
    }
   ]
  },
  {
   "item": "1744232",
   "category": "dress",
   "n_reviews": 200,
   "sampled": 60,
   "true_small": 0.29,
   "true_large": 0.005,
   "pred_small": 0.35,
   "pred_large": 0.06666666666666667,
   "kw_small": 0.31666666666666665,
   "kw_large": 0.016666666666666666,
   "causes": {
    "length": 0.15,
    "fabric_quality": 0.08333333333333333,
    "other": 0.06666666666666667,
    "comfort": 0.05,
    "zipper_or_closure": 0.03333333333333333,
    "colour_vs_photo": 0.016666666666666666
   },
   "report": {
    "size_note": "Runs small: most customers size up one",
    "listing_fix": "This dress has a fitted style. Consider sizing up if you prefer a more relaxed fit or are between sizes.",
    "photo_to_add": "Photo of model wearing the dress with measurements listed (bust, waist, hips) for each size.",
    "headline": "Small sizing is a common issue"
   },
   "examples": [
    {
     "text": "This dress is gorgeous! The arms are tight and I wore a size up (a small\ninstead of an xs and it fit perfectly)",
     "fit": "small",
     "quote": "I wore a size up (a small instead of an xs and it fit perfectly)",
     "causes": [],
     "fix": "Consider mentioning that the dress may run slightly small, especially in the arms."
    },
    {
     "text": "I did not wear this dress to my event, but loved the fit.   Tight fit, you can't wear a bra or spanx with this.",
     "fit": "small",
     "quote": "Tight fit, you can't wear a bra or spanx with this.",
     "causes": [],
     "fix": "Consider adding a note about the dress's fit being very form-fitting and potentially not accommodating undergarments."
    },
    {
     "text": "Beautiful and comfortable dress! Awesome dress! Wore a size bigger than usual as it is very tight, but stretchy and comfortable!",
     "fit": "small",
     "quote": "as it is very tight",
     "causes": [],
     "fix": "Consider adding a note about the dress running tight and recommending customers size up."
    },
    {
     "text": "This dress was so comfortable and stretchy and flattering!!!! Fits fairly true to size.Im usually a 10/12 and wore an xl for added comfort.",
     "fit": "small",
     "quote": "wore an xl for added comfort",
     "causes": [],
     "fix": "Consider mentioning the dress runs small and to size up for a more comfortable fit."
    }
   ]
  },
  {
   "item": "178058",
   "category": "dress",
   "n_reviews": 200,
   "sampled": 60,
   "true_small": 0.225,
   "true_large": 0.025,
   "pred_small": 0.3333333333333333,
   "pred_large": 0.06666666666666667,
   "kw_small": 0.3,
   "kw_large": 0.03333333333333333,
   "causes": {
    "length": 0.21666666666666667,
    "fabric_quality": 0.15,
    "colour_vs_photo": 0.1,
    "comfort": 0.08333333333333333,
    "style_vs_photo": 0.05,
    "zipper_or_closure": 0.016666666666666666,
    "other": 0.016666666666666666
   },
   "report": {
    "size_note": "Runs small: most customers size up one",
    "listing_fix": "This item tends to run smaller than expected, especially in the chest area. We recommend checking the size chart carefully and considering sizing up for a more comfortable fit.",
    "photo_to_add": "Size chart with measurements for chest, waist, and length.",
    "headline": "Small Sizing, Chest Tightness"
   },
   "examples": [
    {
     "text": "Great work dress. Rented this dress to wear to work.  It runs small.  I'm usually a 2/4 but the 6 in this dress fit perfectly.",
     "fit": "small",
     "quote": "It runs small",
     "causes": [],
     "fix": "Consider recommending renters size up, as this dress appears to run small."
    },
    {
     "text": "Loved the dress. Very comfortable and classy. Lots of compliments!  Runs small in the chest. Loved the pockets and thick material. Would rent again.",
     "fit": "small",
     "quote": "Runs small in the chest",
     "causes": [],
     "fix": "Consider adding a note to the listing suggesting renters with a larger chest size up."
    },
    {
     "text": "Great Fall Wedding Dress! I got tons of compliments on this dress. The fabric was a very substantial tweed type of fabric. It does run quite small and is tight in the bust.",
     "fit": "small",
     "quote": "It does run quite small",
     "causes": [],
     "fix": "Consider adding a note to the listing advising customers to size up, especially if they are busty."
    },
    {
     "text": "A great party dress... I had to wear my size up because the eight was a bit tight across the chest.  Wearing the 10 did make the skirt a bit fuller but it was very comfortable and looked great.  I loved the pockets...",
     "fit": "small",
     "quote": "the eight was a bit tight across the chest",
     "causes": [],
     "fix": "Consider suggesting customers size up if they are bustier."
    }
   ]
  },
  {
   "item": "1800440",
   "category": "dress",
   "n_reviews": 188,
   "sampled": 60,
   "true_small": 0.0797872340425532,
   "true_large": 0.05319148936170213,
   "pred_small": 0.11666666666666667,
   "pred_large": 0.06666666666666667,
   "kw_small": 0.13333333333333333,
   "kw_large": 0.0,
   "causes": {
    "length": 0.2,
    "fabric_quality": 0.13333333333333333,
    "comfort": 0.06666666666666667,
    "style_vs_photo": 0.06666666666666667,
    "colour_vs_photo": 0.03333333333333333,
    "other": 0.016666666666666666
   },
   "report": {
    "size_note": "Runs small: most customers size up one",
    "listing_fix": "The bodice fits snugly, especially around the waist and arms. Consider sizing up if you are larger on top or prefer a more relaxed fit.",
    "photo_to_add": "Photo of the garment on a model with measurements for bust, waist, and sleeve length.",
    "headline": "Sizing issues: runs small"
   },
   "examples": [
    {
     "text": "Christmas party with the in-laws What a wonderful dress. It was a hit for the small gathering at my in laws. It was great for my figure and very comfortable. I ordered size 14 but ended up using 16.",
     "fit": "small",
     "quote": "I ordered size 14 but ended up using 16",
     "causes": [],
     "fix": "Consider recommending that customers size up, as this dress may run small."
    },
    {
     "text": "Class and Sass! What a fun flirty dress! Just enough class and sass. Wore it with fishnets and boots! Super adorable, wore the smaller size because it was more fitted through the waist but both looked great!",
     "fit": "small",
     "quote": "Wore the smaller size because it was more fitted through the waist",
     "causes": [],
     "fix": "Consider mentioning that the dress runs slightly small through the waist."
    },
    {
     "text": "Love the mesh Great fit and flare dress. I loved the mesh detail on the neck and back. Skirt flares out a lot and is kind of poufy but I like that. The bodice is pretty tight but I am a 36DD. Arms were a little tight as well but the material does stretch. I am 5'9\" and the dress was long enough (possibly slightly too long for what I wanted, comes down almost to knee).",
     "fit": "small",
     "quote": "The bodice is pretty tight",
     "causes": [
      "length",
      "comfort"
     ],
     "fix": "Consider recommending a size up for those with a larger bust or wider shoulders."
    },
    {
     "text": "Perfect for a fall wedding! I loved everything about this dress and was so upset that it had to be returned! The spandex top made a wonderful slimming fit and the skirt with pockets was perfect for dancing and being comfortable all day. The material is a little heavier, but I was hoping for that since it was a cooler fall day in New York. If you are larger on top, I would recommend going up a size--I could see the sl",
     "fit": "small",
     "quote": "If you are larger on top, I would recommend going up a size--I could see the sleeves being tight with a larger bust.",
     "causes": [
      "other"
     ],
     "fix": "Consider adding a note about the sleeves potentially running small for those with a larger bust."
    }
   ]
  },
  {
   "item": "182578",
   "category": "maxi",
   "n_reviews": 226,
   "sampled": 60,
   "true_small": 0.06637168141592921,
   "true_large": 0.22566371681415928,
   "pred_small": 0.11666666666666667,
   "pred_large": 0.48333333333333334,
   "kw_small": 0.13333333333333333,
   "kw_large": 0.25,
   "causes": {
    "length": 0.5666666666666667,
    "zipper_or_closure": 0.13333333333333333,
    "comfort": 0.13333333333333333,
    "colour_vs_photo": 0.05,
    "style_vs_photo": 0.03333333333333333,
    "other": 0.03333333333333333
   },
   "report": {
    "size_note": "Runs large: consider sizing down, especially in the bust.",
    "listing_fix": "Many customers found this item to be larger than expected, particularly in the bust and waist. We recommend checking the size chart carefully and considering sizing down for a more fitted feel.",
    "photo_to_add": "Size chart with bust and waist measurements clearly labeled.",
    "headline": "Larger than expected fit"
   },
   "examples": [
    {
     "text": "Beautiful dress\n Loved the dress, a little big on top...went with my other choice",
     "fit": "large",
     "quote": "a little big on top",
     "causes": [],
     "fix": "Consider recommending customers size down if they are between sizes or have a smaller bust."
    },
    {
     "text": "Loved the dress - comfortable and fun Fit great, but definitely needed a pin to keep it together!",
     "fit": "large",
     "quote": "needed a pin to keep it together",
     "causes": [
      "zipper_or_closure"
     ],
     "fix": "Consider adding a hook and eye closure for extra security."
    },
    {
     "text": "Very roomy Bust I am a full c cup and I ended up having to tape this dress to my boobs so that when I leaned forward at dinner you couldn't see my nips.  Other than that, it was a cute dress. Nothing special.",
     "fit": "large",
     "quote": "Very roomy Bust",
     "causes": [
      "comfort"
     ],
     "fix": "Consider adding a note about the dress being loose-fitting in the bust and recommending a bra or adjustments for support."
    },
    {
     "text": "Lots of compliments on the dress! Much more beautiful than expected :)  It fit pretty loosely in the bust area and was a little lower than expected so some tape will be needed for most. Was also quite long but such a beautiful pattern and material!",
     "fit": "large",
     "quote": "fit pretty loosely in the bust area",
     "causes": [
      "length"
     ],
     "fix": "Consider adding a note about the dress running large in the bust and potentially needing adjustment for a more secure fit."
    }
   ]
  },
  {
   "item": "1858651",
   "category": "dress",
   "n_reviews": 191,
   "sampled": 60,
   "true_small": 0.09424083769633508,
   "true_large": 0.05759162303664921,
   "pred_small": 0.2,
   "pred_large": 0.06666666666666667,
   "kw_small": 0.13333333333333333,
   "kw_large": 0.06666666666666667,
   "causes": {
    "colour_vs_photo": 0.15,
    "length": 0.11666666666666667,
    "fabric_quality": 0.08333333333333333,
    "comfort": 0.06666666666666667,
    "style_vs_photo": 0.06666666666666667,
    "other": 0.016666666666666666
   },
   "report": {
    "size_note": "Runs small: most customers size up one",
    "listing_fix": "Sizing is inconsistent; consider ordering one size larger than your usual size for a better fit. Please see our size chart for detailed measurements.",
    "photo_to_add": "Size chart with measurements for each size.",
    "headline": "Inconsistent Sizing Causes Returns"
   },
   "examples": [
    {
     "text": "Cute dress! got lots of compliments  i ordered the dress in Medium bc the S was unavailable. dress fit comfortably though i wish i had the small as a point of comparison. you may wan to go strapless to use a convertible strapped bra.",
     "fit": "small",
     "quote": "I ordered the dress in Medium bc the S was unavailable.",
     "causes": [],
     "fix": "Consider adding a note suggesting customers compare size charts carefully, as sizes may run slightly large."
    },
    {
     "text": "XS is too small for a size 2. Rent the Runway suggested I order an XS despite the fact that I'm usually a size 2. They were out of a S in this dress so I went with XS since RTR suggested it. Was too small! Next time I'll trust my gut and not get an XS.",
     "fit": "small",
     "quote": "Was too small!",
     "causes": [],
     "fix": "We recommend sizing up, especially if you typically wear a size 2."
    },
    {
     "text": "Great dress - different, comfortable, and very flattering!   This is a great dress!  I felt comfortable all night and received lots of compliments on the design.  \n\nDefinitely order two sizes -- I felt that it ran a bit small, particularly in the bustand waistline.",
     "fit": "small",
     "quote": "ran a bit small",
     "causes": [],
     "fix": "Consider adding a note to the listing advising customers to size up, especially if they are busty or have a larger waist."
    },
    {
     "text": "rehearsal dinner So perfect for a pear.  Fit like a glove, no need for a bra.  Also was very flattering the way it flared out on the hips.  I want to own this dress.  My sister is a size 0/2 and rented the small and said it looked terrible and was too big.  So be careful if you're tiny.",
     "fit": "small",
     "quote": "looked terrible and was too big",
     "causes": [],
     "fix": "Consider adding a note to the listing advising petite customers to size down."
    }
   ]
  },
  {
   "item": "1920477",
   "category": "dress",
   "n_reviews": 271,
   "sampled": 60,
   "true_small": 0.22140221402214022,
   "true_large": 0.007380073800738007,
   "pred_small": 0.31666666666666665,
   "pred_large": 0.05,
   "kw_small": 0.5,
   "kw_large": 0.06666666666666667,
   "causes": {
    "length": 0.2833333333333333,
    "comfort": 0.2,
    "fabric_quality": 0.08333333333333333,
    "colour_vs_photo": 0.05,
    "zipper_or_closure": 0.03333333333333333,
    "other": 0.016666666666666666,
    "style_vs_photo": 0.016666666666666666
   },
   "report": {
    "size_note": "Runs small: most customers size up one",
    "listing_fix": "This style tends to run small, especially in the bust and arms. We recommend ordering one size larger than your usual size for a more comfortable fit.",
    "photo_to_add": "Photo showing garment measurements, including bust and arm circumference, laid flat.",
    "headline": "Small sizing, bust and arm fit issues"
   },
   "examples": [
    {
     "text": "Comfortable & cute! LOTS of compliments! Very flattering and comfortable, arms are tight as previous comments mentioned.",
     "fit": "small",
     "quote": "arms are tight",
     "causes": [
      "comfort"
     ],
     "fix": "Consider mentioning in the description that the sleeves may be snug for some."
    },
    {
     "text": "Well made and comfortable dress... plus, it has pockets! Like the other reviews say, the arms are a little snug so I sized up.",
     "fit": "small",
     "quote": "the arms are a little snug so I sized up",
     "causes": [],
     "fix": "Consider mentioning that the sleeves may run a bit snug, and customers might want to size up for a more comfortable fit."
    },
    {
     "text": "i was not happy with the dress AT ALL.. chest area was tight. the dress is definitely not for curvy. order a size up, dress is not for bustywomen",
     "fit": "small",
     "quote": "chest area was tight",
     "causes": [
      "comfort"
     ],
     "fix": "Consider adding a note to the listing that the dress may fit snugly in the chest area, especially for those with a larger bust."
    },
    {
     "text": "Loved the dress Fits true to size.  Arms are a bit snug which makes it hard to zip up by yourself.  I thought it was gorgeous and would have loved to have kept it!",
     "fit": "small",
     "quote": "Arms are a bit snug which makes it hard to zip up by yourself",
     "causes": [
      "zipper_or_closure"
     ],
     "fix": "Consider mentioning that the sleeves may be snug for some, especially when zipping."
    }
   ]
  },
  {
   "item": "196859",
   "category": "maxi",
   "n_reviews": 166,
   "sampled": 60,
   "true_small": 0.018072289156626505,
   "true_large": 0.5,
   "pred_small": 0.13333333333333333,
   "pred_large": 0.4166666666666667,
   "kw_small": 0.05,
   "kw_large": 0.35,
   "causes": {
    "length": 0.5,
    "comfort": 0.13333333333333333,
    "fabric_quality": 0.03333333333333333,
    "style_vs_photo": 0.016666666666666666,
    "other": 0.016666666666666666
   },
   "report": {
    "size_note": "Runs large: consider sizing down, especially in the bust.",
    "listing_fix": "Many customers found this dress to be larger than expected, particularly in the bust and length. We recommend checking the size chart carefully and considering sizing down for a more fitted feel.",
    "photo_to_add": "A photo of the dress on a model with measurements for bust, waist, and length.",
    "headline": "Runs large, especially in the bust"
   },
   "examples": [
    {
     "text": "Great maxi, runs large/long. Great maxi, runs large/long.",
     "fit": "large",
     "quote": "runs large",
     "causes": [],
     "fix": "Consider adding a note to the listing advising customers to size down."
    },
    {
     "text": "I didn't wear the dress.  Was way to long and large for my 5\"5 frame.",
     "fit": "large",
     "quote": "way to long and large",
     "causes": [
      "length"
     ],
     "fix": "Consider adding a note about the dress running long, especially for those under 5'5\"."
    },
    {
     "text": "Such an amazing dress, fabric was perfect for the beach wedding.  Definitely go a size down.",
     "fit": "large",
     "quote": "Definitely go a size down.",
     "causes": [],
     "fix": "Consider adding a note to size down for a more accurate fit."
    },
    {
     "text": "Loved the colors and the comfort! The top was definitely a little large so I had to safety pin it on the back to lift it up. So comfortable!!",
     "fit": "large",
     "quote": "a little large",
     "causes": [
      "comfort"
     ],
     "fix": "Consider adding a note to the listing suggesting customers may want to size down for a more fitted look."
    }
   ]
  },
  {
   "item": "265806",
   "category": "maxi",
   "n_reviews": 170,
   "sampled": 60,
   "true_small": 0.06470588235294118,
   "true_large": 0.13529411764705881,
   "pred_small": 0.2,
   "pred_large": 0.18333333333333332,
   "kw_small": 0.18333333333333332,
   "kw_large": 0.11666666666666667,
   "causes": {
    "length": 0.36666666666666664,
    "fabric_quality": 0.08333333333333333,
    "comfort": 0.06666666666666667,
    "style_vs_photo": 0.03333333333333333,
    "zipper_or_closure": 0.016666666666666666
   },
   "report": {
    "size_note": "Runs large: consider sizing down, especially with a larger bust.",
    "listing_fix": "Sizing can be inconsistent; some customers found it ran larger than expected, particularly in the bust. We recommend checking the size chart carefully and considering sizing down if you have a larger bust.",
    "photo_to_add": "Size chart with bust measurements.",
    "headline": "Runs small",
    "headline_replaced": true
   },
   "examples": [
    {
     "text": "I love the fit and fabric of this dress!  On a bigger bust the top might not fit properly. It curves in a lot, so don't get a size smaller.",
     "fit": "small",
     "quote": "On a bigger bust the top might not fit properly",
     "causes": [],
     "fix": "Consider recommending sizing up for those with a larger bust."
    },
    {
     "text": "Bridal Luncheon Dress fit very well, and loved the pockets! The black band at the waist has no stretch in it, so you probably want to size up for your back up size",
     "fit": "small",
     "quote": "you probably want to size up for your back up size",
     "causes": [],
     "fix": "Consider recommending customers size up, especially if they have a larger waist or back."
    },
    {
     "text": "Small but flattering  Wore to a bridal shower. Lots of compliments--beautiful material, pockets, straps are elastic, but the waist was tight. Still flattering though but def size up",
     "fit": "small",
     "quote": "def size up",
     "causes": [
      "comfort"
     ],
     "fix": "Consider advising customers to size up, especially around the waist."
    },
    {
     "text": "Favorite rental of all time!   Perfect for a day trip in New England, followed by a beach trip.  Rented and wore the 2 (I'm usually a 4), since previous reviews said top was on the larger side.",
     "fit": "small",
     "quote": "top was on the larger side",
     "causes": [],
     "fix": "Consider adding a note to size down for a more fitted look."
    }
   ]
  },
  {
   "item": "2829293",
   "category": "jumpsuit",
   "n_reviews": 187,
   "sampled": 60,
   "true_small": 0.0374331550802139,
   "true_large": 0.1925133689839572,
   "pred_small": 0.03333333333333333,
   "pred_large": 0.23333333333333334,
   "kw_small": 0.11666666666666667,
   "kw_large": 0.11666666666666667,
   "causes": {
    "length": 0.21666666666666667,
    "comfort": 0.08333333333333333,
    "zipper_or_closure": 0.06666666666666667,
    "other": 0.06666666666666667,
    "style_vs_photo": 0.05
   },
   "report": {
    "size_note": "Runs large: consider sizing down one.",
    "listing_fix": "This style tends to run larger than expected. We recommend checking the size chart carefully and considering ordering a size down for a more fitted feel.",
    "photo_to_add": "Size chart with measurements for each size.",
    "headline": "Runs large, size down recommended"
   },
   "examples": [
    {
     "text": "I am 5'2\" and it was a bit to large overall, it worked but I would have liked it to be more tailored too long and overall large for my frame",
     "fit": "large",
     "quote": "a bit to large overall",
     "causes": [
      "length"
     ],
     "fix": "Consider adding a note about the dress running large, especially for petite frames, and recommending tailoring for a more fitted look."
    },
    {
     "text": "Rented this for a friends an engagement party in January.  a little lose in the top but since I'm long waisted couldn't wear the 6R. Over all very flattering and got lots of compliments.",
     "fit": "large",
     "quote": "a little lose in the top",
     "causes": [
      "length"
     ],
     "fix": "Consider noting that the garment may run loose in the upper body for those with longer torsos."
    },
    {
     "text": "A standout in a sea of LBD's.  I loved this outfit.  It is very stylish for a cocktail party.  Something more than a little black dress.  It runs a little large, so size down.  I am 5'5 and 112 lbs.  I needed a size 0 .  The two was giant!",
     "fit": "large",
     "quote": "It runs a little large, so size down.",
     "causes": [],
     "fix": "Consider adding a note to the listing advising customers to size down for a more fitted look."
    },
    {
     "text": "I rented this for a rehearsal dinner party. This is an awesome outfit! I typically wear size 4, but because I am shorter I rented a size 2.  I'm glad I did.  It was still a little long, but with heels it worked just fine! I ould definitely rent again.",
     "fit": "large",
     "quote": "I rented a size 2",
     "causes": [
      "length"
     ],
     "fix": "Consider noting that the garment may run large, especially for those of shorter stature."
    }
   ]
  },
  {
   "item": "466944",
   "category": "gown",
   "n_reviews": 248,
   "sampled": 60,
   "true_small": 0.09274193548387097,
   "true_large": 0.06048387096774194,
   "pred_small": 0.11666666666666667,
   "pred_large": 0.16666666666666666,
   "kw_small": 0.15,
   "kw_large": 0.08333333333333333,
   "causes": {
    "length": 0.26666666666666666,
    "comfort": 0.11666666666666667,
    "other": 0.1,
    "style_vs_photo": 0.03333333333333333,
    "fabric_quality": 0.016666666666666666,
    "zipper_or_closure": 0.016666666666666666
   },
   "report": {
    "size_note": "Runs small: most customers size up one or two sizes.",
    "listing_fix": "Customers found this item fit tightly, especially around the hips and waist. Consider sizing up for a more comfortable fit.",
    "photo_to_add": "Photo with measurements of the garment laid flat, including hip and waist circumference.",
    "headline": "Sizing issues: small and inconsistent"
   },
   "examples": [
    {
     "text": "I just put the dress on and went. I didn't have to worry about anything.  The fit was a little lose, but in a flattering way. I'm 5'2 and with wedges it was the perfect length.",
     "fit": "large",
     "quote": "a little lose",
     "causes": [
      "length"
     ],
     "fix": "Consider adding a note about the dress being slightly loose for petite frames."
    },
    {
     "text": "Perfect prom dress! timeless  I am a size 4 but the 4 was not available, so I made it work with the size 6 and four safety pins. The neckline looks amazing in person and even though the dress was a bit loose on me, the silhouette made me stand out.",
     "fit": "large",
     "quote": "a bit loose on me",
     "causes": [],
     "fix": "Consider suggesting customers may want to size down for a more fitted silhouette."
    },
    {
     "text": "Striking!! I ordered a 2L because a 0L wasn't available and I knew I needed the length. The dress was beautiful but fit bigger than I would've liked in the waist. I quickly (and temporarily) took in the back seams, which helped the fit and silhouette a lot. With the quick adjustment, it turned out to be an amazing dress for the night.",
     "fit": "large",
     "quote": "fit bigger than I would've liked in the waist",
     "causes": [
      "other"
     ],
     "fix": "Consider noting that the dress may run a bit large, especially in the waist, for some customers."
    },
    {
     "text": "I didn't stop getting compliments on my dress! Absolutely beautiful dress! Perfect length if you have HIGH heels that you're planning on wearing with it. The size fit perfectly, except for the mid section. It was a bit loose in the belly and the lower back; I would have preferred a more fitting section (especially in the back area) to show my curves a little better. Overall, great dress though!",
     "fit": "large",
     "quote": "It was a bit loose in the belly and the lower back",
     "causes": [
      "style_vs_photo"
     ],
     "fix": "Consider adding a note about the dress being slightly loose in the midsection and potentially better suited for those with a straighter figure."
    }
   ]
  },
  {
   "item": "467817",
   "category": "dress",
   "n_reviews": 165,
   "sampled": 60,
   "true_small": 0.03636363636363636,
   "true_large": 0.11515151515151516,
   "pred_small": 0.08333333333333333,
   "pred_large": 0.2,
   "kw_small": 0.05,
   "kw_large": 0.11666666666666667,
   "causes": {
    "length": 0.16666666666666666,
    "style_vs_photo": 0.06666666666666667,
    "comfort": 0.06666666666666667,
    "other": 0.05,
    "fabric_quality": 0.03333333333333333,
    "colour_vs_photo": 0.03333333333333333
   },
   "report": {
    "size_note": "Runs large: most customers size down one.",
    "listing_fix": "This dress appears to run larger than expected. Consider ordering one size smaller than your usual size for a more fitted look.",
    "photo_to_add": "",
    "headline": "Size down for a better fit"
   },
   "examples": [
    {
     "text": "It was really pretty but I needed a 2 very flowy, nice colors, I really like this dress and plan to rent it in the size down",
     "fit": "large",
     "quote": "I needed a 2",
     "causes": [],
     "fix": "Consider suggesting customers size down for a more fitted look."
    },
    {
     "text": "Received comments on wearing something colorful and springy fit true to size, I should have worn a 4 - I wear either a 4 or 6.  Very comfortable.",
     "fit": "large",
     "quote": "I should have worn a 4",
     "causes": [],
     "fix": "Consider adding a note suggesting customers who are between sizes may want to size down."
    },
    {
     "text": "Perfect dress for a summer wedding! Loved this dress! The 4 fit but was a little large - the 2 was perfect. I wore a strapless bra and paired it with tan heels.",
     "fit": "large",
     "quote": "a little large - the 2 was perfect",
     "causes": [],
     "fix": "Consider suggesting customers size down for a more tailored fit."
    },
    {
     "text": "Looks great and very comfortable; was a little loose (i.e., not tight) Unfortunately this dress had smells of BO in the underarm area. Additionally there was a rip at the bottom of the zipper however it was not noticeable.",
     "fit": "large",
     "quote": "was a little loose",
     "causes": [
      "fabric_quality",
      "other"
     ],
     "fix": "Consider adding a note about the dress running slightly loose and recommending customers check the size chart carefully."
    }
   ]
  },
  {
   "item": "709832",
   "category": "gown",
   "n_reviews": 190,
   "sampled": 60,
   "true_small": 0.15789473684210525,
   "true_large": 0.04736842105263158,
   "pred_small": 0.18333333333333332,
   "pred_large": 0.1,
   "kw_small": 0.16666666666666666,
   "kw_large": 0.05,
   "causes": {
    "length": 0.35,
    "comfort": 0.1,
    "other": 0.03333333333333333,
    "fabric_quality": 0.016666666666666666,
    "style_vs_photo": 0.016666666666666666,
    "zipper_or_closure": 0.016666666666666666
   },
   "report": {
    "size_note": "Runs small, especially for those with larger busts; consider sizing up.",
    "listing_fix": "Many customers found this item to be snug, particularly in the bust. We recommend checking the size chart carefully and considering sizing up for a more comfortable fit.",
    "photo_to_add": "Size chart with bust measurements.",
    "headline": "Snug fit, especially in the bust"
   },
   "examples": [
    {
     "text": "Gorgeous dress I ordered the 10 and 12 but ended up wearing the 12. The 10 fit but because I have a booty and wide back it was snug. The 12 fit well and everyone complimented it all night. Wore high heels to keep it off the ground.",
     "fit": "small",
     "quote": "it was snug",
     "causes": [
      "length"
     ],
     "fix": "Consider adding a note about the dress fitting snugly, especially for those with wider backs or hips."
    },
    {
     "text": "Gorgeous dress for a black tie affair I wore the 6L to a New Year's Eve black tie party.  I ordered the 8R as my backup size and it was too short and had too much material in the stomach.  The dress is stunning and pretty comfortable.",
     "fit": "small",
     "quote": "The 8R as my backup size and it was too short",
     "causes": [
      "length"
     ],
     "fix": "Consider adding a note about the dress running large, especially in length."
    },
    {
     "text": "The dress flattered my hourglass shape. The material was gorgeous! I'm a 34DDD and the top was super snug. It's not a very giving fabric so I chose to wear the larger of the 2 sizes I reserved. Very comfortable everywhere else but snug around the bust all around.",
     "fit": "small",
     "quote": "super snug",
     "causes": [
      "fabric_quality",
      "comfort"
     ],
     "fix": "Consider mentioning that the fabric is not very stretchy, especially in the bust area, and to size up if you have a larger bust."
    },
    {
     "text": "I loved this dress and received many compliments. It is fitted and great detail, but classic.  It was very difficult and tight to get over my wide hips, so had to go with a 12 (I'm usually a 10) but felt like a million bucks in it. Received compliments, photographed well, and the bride told me a month later that people had commented on it being a nice dress - they didn't know me (or my name).",
     "fit": "small",
     "quote": "very difficult and tight to get over my wide hips",
     "causes": [
      "comfort"
     ],
     "fix": "Consider adding a note about the dress being fitted and potentially challenging to wear for those with wider hips."
    }
   ]
  },
  {
   "item": "858304",
   "category": "dress",
   "n_reviews": 217,
   "sampled": 60,
   "true_small": 0.2073732718894009,
   "true_large": 0.009216589861751152,
   "pred_small": 0.3333333333333333,
   "pred_large": 0.03333333333333333,
   "kw_small": 0.3,
   "kw_large": 0.0,
   "causes": {
    "zipper_or_closure": 0.26666666666666666,
    "comfort": 0.1,
    "fabric_quality": 0.08333333333333333,
    "length": 0.08333333333333333,
    "style_vs_photo": 0.06666666666666667
   },
   "report": {
    "size_note": "Runs small: most customers size up one.",
    "listing_fix": "This style fits snugly, especially at the waist. Consider sizing up for a more comfortable fit, particularly if you are between sizes or have a larger bust.",
    "photo_to_add": "Photo showing the garment zipped and a person struggling slightly to zip it.",
    "headline": "Small size, zipper issues, sizing up needed"
   },
   "examples": [
    {
     "text": "Could not wear the dress Just a bit snug. If this had come in a 16, I would have been all over it.",
     "fit": "small",
     "quote": "Just a bit snug",
     "causes": [],
     "fix": "Consider adding a note to the listing suggesting customers size up if they are between sizes."
    },
    {
     "text": "Great dress for a rehearsal dinner The bust was tight in the 12 so I wore the 14.  Very fun dress that photographed nicely.",
     "fit": "small",
     "quote": "The bust was tight in the 12 so I wore the 14",
     "causes": [],
     "fix": "Consider suggesting customers size up if they are busty."
    },
    {
     "text": "Got so many compliments in this dress I wore a size 8. It was pretty tight in the chest but overall I LOVED the dress. I got a ton of compliments on it.",
     "fit": "small",
     "quote": "pretty tight in the chest",
     "causes": [],
     "fix": "Consider suggesting customers size up if they are busty."
    },
    {
     "text": "Comfortable and has POCKETS! I had to wear the large size (12) because it really does cinch in at the waist.  But it was extremely comfortable and I loved having pockets.",
     "fit": "small",
     "quote": "I had to wear the large size (12) because it really does cinch in at the waist.",
     "causes": [],
     "fix": "Consider mentioning that the garment runs small and customers may need to size up, especially around the waist."
    }
   ]
  },
  {
   "item": "883661",
   "category": "dress",
   "n_reviews": 188,
   "sampled": 60,
   "true_small": 0.015957446808510637,
   "true_large": 0.9095744680851063,
   "pred_small": 0.13333333333333333,
   "pred_large": 0.6666666666666666,
   "kw_small": 0.016666666666666666,
   "kw_large": 0.43333333333333335,
   "causes": {
    "fabric_quality": 0.13333333333333333,
    "length": 0.11666666666666667,
    "comfort": 0.08333333333333333,
    "style_vs_photo": 0.08333333333333333,
    "colour_vs_photo": 0.016666666666666666,
    "other": 0.016666666666666666,
    "zipper_or_closure": 0.016666666666666666
   },
   "report": {
    "size_note": "Runs large: most customers size down one or two.",
    "listing_fix": "Many customers found this item to run larger than expected. We recommend checking the size chart carefully and considering sizing down for a better fit.",
    "photo_to_add": "Size chart with measurements for each size.",
    "headline": "Runs large - size down!"
   },
   "examples": [
    {
     "text": "beautiful dress but ran too large ran too large and now without a dress!",
     "fit": "large",
     "quote": "ran too large",
     "causes": [],
     "fix": "Consider advising customers to size down, as this dress appears to run large."
    },
    {
     "text": "Beautiful! Loved this dress, so flattering.  Runs super large!!! I normally wear a 6, and the 0 fit just right.",
     "fit": "large",
     "quote": "Runs super large!!!",
     "causes": [],
     "fix": "Consider adding a note to the listing advising customers to size down."
    },
    {
     "text": "Perfect red dress!  It's stretchy which nice and comfortable. It was a little big on my shoulders other than that I loved this dress!",
     "fit": "large",
     "quote": "It was a little big on my shoulders",
     "causes": [
      "length"
     ],
     "fix": "Consider mentioning that the dress may run slightly large on some body types, particularly around the shoulders."
    },
    {
     "text": "Red dress with a little cleavage This dress is a nice basic red dress. I found it hard to find a bra to wear underneath that did not show. Perhaps I should have gone a size down.",
     "fit": "large",
     "quote": "Perhaps I should have gone a size down.",
     "causes": [],
     "fix": "Consider adding a note about potential sizing issues or bra visibility."
    }
   ]
  }
 ]
};
