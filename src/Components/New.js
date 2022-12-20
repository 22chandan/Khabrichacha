import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class New extends Component {
    articles = [
        {
          "source": { "id": "the-washington-post", "name": "The Washington Post" },
          "author": "Isaac Arnsdorf, Josh Dawsey",
          "title": "What the midterm results mean for Trump, 2024 presidential election - The Washington Post",
          "description": "The former president and Florida's Republican governor experienced two very different election nights.",
          "url": "https://www.washingtonpost.com/politics/2022/11/09/desantis-trump-2024-presidential-election/",
          "urlToImage": "https://www.washingtonpost.com/wp-apps/imrs.php?src=https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/VPP6GQQP3EI6XNAERUPGOXWHAE.jpg&w=1440",
          "publishedAt": "2022-11-09T10:32:55Z",
          "content": "Comment on this story\r\nOne likely contender for the Republican presidential nomination in 2024 had a triumphant night on Tuesday, and it wasnt Donald Trump.\r\nThe former president spent the final days… [+8359 chars]"
        },
        {
          "source": { "id": null, "name": "CNBC" },
          "author": "Elliot Smith",
          "title": "Adidas warns of big earnings hit after ending Ye partnership - CNBC",
          "description": "Adidas on Wednesday cut its full-year guidance on the back of the German sportswear giant's termination of its partnership with Kanye West's Yeezy brand.",
          "url": "https://www.cnbc.com/2022/11/09/adidas-warns-of-big-earnings-hit-after-ending-ye-partnership.html",
          "urlToImage": "https://image.cnbcfm.com/api/v1/image/103849207-GettyImages-543531002.jpg?v=1667980576&w=1920&h=1080",
          "publishedAt": "2022-11-09T07:56:16Z",
          "content": "Adidas on Wednesday cut its full-year guidance on the back of the German sportswear giant's termination of its partnership with Kanye West's Yeezy brand.\r\nThe company ended its relationship with Ye, … [+2266 chars]"
        },
        {
          "source": { "id": "reuters", "name": "Reuters" },
          "author": null,
          "title": "North Korea fires another missile as South salvages parts of Soviet-era weapon - Reuters",
          "description": "North Korea fired at least one ballistic missile into the sea on Wednesday, as South Korea said it had identified debris from an earlier launch as part of a Soviet-era SA-5 surface-to-air missile.",
          "url": "https://www.reuters.com/world/asia-pacific/south-korea-salvages-parts-liquid-fuel-north-korean-short-range-missile-yonhap-2022-11-09/",
          "urlToImage": "https://www.reuters.com/resizer/-XD9vLRV7Ci10ba9_f7PuypVAlk=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/UQTWFJYF7FJSXGP5TH4NAAVLOM.jpg",
          "publishedAt": "2022-11-09T07:43:00Z",
          "content": "SEOUL, Nov 9 (Reuters) - North Korea fired at least one ballistic missile into the sea on Wednesday, as South Korea said it had identified debris from an earlier launch as part of a Soviet-era SA-5 s… [+3180 chars]"
        },
        {
          "source": { "id": null, "name": "YouTube" },
          "author": null,
          "title": "Fetterman Defeats Oz In PA Senate Race, Praised For Performance After Stroke - MSNBC",
          "description": "John Fetterman is praised for his transparency, authenticity, and the strength of his U.S. Senate campaign for Pennsylvania after having a stroke, during MSN...",
          "url": "https://www.youtube.com/watch?v=0O1l8uKzmCY",
          "urlToImage": "https://i.ytimg.com/vi/0O1l8uKzmCY/maxresdefault.jpg",
          "publishedAt": "2022-11-09T06:56:01Z",
          "content": null
        },
        {
          "source": { "id": null, "name": "Gematsu" },
          "author": "Sal Romano",
          "title": "Pokemon Scarlet and Violet trailer, details, and screenshots - Books, Black Crystal Tera Raid Battles, Tera Raid Battle Events, more - Gematsu",
          "description": "The Pokemon Company and developer Game Freak have released a new trailer, information, and screenshots for Pokemon Scarlet and Pokemon Violet introducing the Scarlet and Violet Books…",
          "url": "https://www.gematsu.com/2022/11/pokemon-scarlet-and-violet-trailer-details-and-screenshots-books-black-crystal-tera-raid-battles-tera-raid-battle-events-more",
          "urlToImage": "https://www.gematsu.com/wp-content/uploads/2022/11/Pokemon-Scarlet-and-Violet_2022_11-08-22_013.jpg",
          "publishedAt": "2022-11-09T06:38:23Z",
          "content": "The Pokemon Company and developer Game Freak have released a new trailer, information, and screenshots for Pokemon Scarlet and Pokemon Violet introducing the Scarlet and Violet Books, Black Crystal T… [+10211 chars]"
        },
        {
          "source": { "id": null, "name": "Deadline" },
          "author": "Ted Johnson",
          "title": "Midterms 2022: Where Is The Red Wave?– Update - Deadline",
          "description": "UPDATE, 11:46 PM PT: After all the rallies, all the ads, all the mudslinging, all the polls and predictions, and all the money, the overall results of the 2022 Midterm elections are up in the air heading towards the midnight hour. With Senate seats in Arizona…",
          "url": "https://deadline.com/2022/11/midterm-election-results-2022-1235166965/",
          "urlToImage": "https://deadline.com/wp-content/uploads/2022/11/elections1.jpg?w=1000",
          "publishedAt": "2022-11-09T05:24:00Z",
          "content": "UPDATE, 11:46 PM PT: After all the rallies, all the ads, all the mudslinging, all the polls and predictions, and all the money, the overall results of the 2022 Midterm elections are up in the air hea… [+19813 chars]"
        },
        {
          "source": { "id": null, "name": "Yahoo Entertainment" },
          "author": "Christopher Wilson",
          "title": "Democrat Josh Shapiro wins Pennsylvania governor’s race - Yahoo News",
          "description": "Pennsylvania's state attorney general kept Democrats in control of the governor's mansion with a comfortable win on Tuesday night.",
          "url": "https://news.yahoo.com/josh-shapiro-2022-pennsylvania-governor-election-043205380.html",
          "urlToImage": "https://s.yimg.com/ny/api/res/1.2/I.akWrgawjsjkxeepmivSQ--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyMDA7aD02NzU-/https://s.yimg.com/os/creatr-uploaded-images/2022-11/e1cf2700-5ff1-11ed-a926-cdcd1452d699",
          "publishedAt": "2022-11-09T04:41:15Z",
          "content": "Attorney General Josh Shapiro has won the Pennsylvania governors race, keeping the states executive branch under Democratic control and alleviating concerns about his opponent undermining the 2024 el… [+3439 chars]"
        },
        {
          "source": { "id": null, "name": "CNBC" },
          "author": "Jesse Pound, Yun Li",
          "title": "Stock futures dip as Wall Street awaits results of midterm elections - CNBC",
          "description": "Stocks have climbed for three-straight days ahead of the midterm elections.",
          "url": "https://www.cnbc.com/2022/11/08/stock-futures-are-little-changed-as-wall-street-awaits-results-of-midterm-elections.html",
          "urlToImage": "https://image.cnbcfm.com/api/v1/image/107141831-1666881511968-gettyimages-1437011428-dscf7869_8950a41f-cce9-4d6d-81aa-4077e744d641.jpeg?v=1667948584&w=1920&h=1080",
          "publishedAt": "2022-11-09T04:24:00Z",
          "content": "Stock futures were basically flat following recent market gains leading up to Tuesday's results of the midterm elections.\r\nS&amp;P 500 futures were higher by 0.1%, while Dow futures were down 10 poin… [+1343 chars]"
        },
        {
          "source": { "id": null, "name": "FOX 35 Orlando" },
          "author": "FOX 35 Orlando",
          "title": "Tropical Storm Nicole: Hurricane Warning issued for portions of Florida's east coast - FOX 35 Orlando",
          "description": "Tropical Storm Nicole was nearing hurricane strength late Tuesday evening as the storm continued to move toward Florida.",
          "url": "https://www.fox35orlando.com/news/subtropical-storm-nicole-tropical-storm-warning-issued-for-most-of-central-florida",
          "urlToImage": "https://images.foxtv.com/static.fox35orlando.com/www.fox35orlando.com/content/uploads/2022/11/1280/720/IAN-HURRICANE-WATCHES.png?ve=1&tl=1",
          "publishedAt": "2022-11-09T04:20:43Z",
          "content": "Depend on FOX 35\r\n<ul><li>Watch our livestream above for live reports and updates on Tropical Storm Nicole's track and impact, as well as how local counties, cities, and towns are preparing for the s… [+3201 chars]"
        },
        {
          "source": { "id": null, "name": "WPVI-TV" },
          "author": null,
          "title": "Live Election Results NJ: Andy Kim defeats GOP challenger Bob Healey, wins 3rd term in House - WPVI-TV",
          "description": "Kim won in the newly drawn 3rd District in southern and central New Jersey, which includes more Democratic voters than the previous district's boundaries.",
          "url": "https://6abc.com/2022-midterms-election-results-day-andy-kim-bob-healey/12430986/",
          "urlToImage": "https://cdn.abcotvs.com/dip/images/12429543_110822njcandidates.jpg?w=1600",
          "publishedAt": "2022-11-09T04:18:45Z",
          "content": "TRENTON, New Jersey (WPVI) -- Democratic incumbent Andy Kim has defeated his GOP challenger and won a third term in Congress.\r\nKim won in the newly drawn 3rd District in southern and central New Jers… [+4101 chars]"
        },
        {
          "source": { "id": null, "name": "Page Six" },
          "author": "Nicki Cox",
          "title": "Aaron Carter's fiancé calls cops as she moves things out of late singer's home - Page Six",
          "description": "Carter, 34, and Martin, 30, welcomed their son Prince on Nov. 22 last year. The singer was found dead on Nov. 5 at his home in Los Angeles.",
          "url": "https://pagesix.com/2022/11/08/aaron-carters-fiance-melanie-martin-moves-out-of-late-singers-home/",
          "urlToImage": "https://pagesix.com/wp-content/uploads/sites/3/2022/11/aaron-carter-fiancee-melanie-martin-moves-out-home-calls-cops.jpg?quality=75&strip=all&w=1200",
          "publishedAt": "2022-11-09T04:09:00Z",
          "content": "Aaron Carter’s fiancée, Melanie Martin, called the cops to “keep the peace” while she moved her things out of the late singer’s house. \r\nTMZ reported that a woman called the L.A. County Sheriff’s off… [+2994 chars]"
        },
        {
          "source": { "id": "fox-sports", "name": "Fox Sports" },
          "author": "Jordan Shusterman, Jake Mintz",
          "title": "2022 MLB free agent rankings, team fits: Aaron Judge leads top 30 - FOX Sports",
          "description": "This year's group of MLB free agents features superstar hitters like Aaron Judge and Carlos Correa and ace pitchers like Justin Verlander. FOX Sports ranks the top 30.",
          "url": "https://www.foxsports.com/stories/mlb/2022-mlb-free-agent-rankings-team-fits-aaron-judge-leads-top-30",
          "urlToImage": "https://a57.foxsports.com/statics.foxsports.com/www.foxsports.com/content/uploads/2022/11/1408/814/11.04.22_MLBFreeAgency_Horizontal-2.jpg?ve=1&tl=1",
          "publishedAt": "2022-11-09T03:28:44Z",
          "content": "With a ridiculously fun World Series in the rearview mirror, we turn our attention to a different kind of ridiculous fun: MLB free agency.\r\nAdding to the intrigue and anticipation of this winter is t… [+16447 chars]"
        },
        {
          "source": { "id": null, "name": "Eonline.com" },
          "author": "Angie Orellana Hernandez",
          "title": "MTV’s Chanel West Coast Reveals Name and Photos of Her Baby Girl - E! NEWS",
          "description": "Ridiculousness star Chanel West Coast provided an update about her baby's girl name and health following initial birth complications.",
          "url": "https://www.eonline.com/news/1353867/mtvs-chanel-west-coast-reveals-name-and-photos-of-her-baby-girl",
          "urlToImage": "https://akns-images.eonline.com/eol_images/Entire_Site/202255/rs_1200x1200-220605171111-1200-Chanel-West-Coast-202-MTV-Movie-and-TV-Awards.jpg?fit=around%7C1080:1080&output-quality=90&crop=1080:1080;center,top",
          "publishedAt": "2022-11-09T03:24:00Z",
          "content": "Chanel West Coast is sharing her baby girl's ridiculously cute name.\r\nThe Ridiculousness star gave more details about her newborn daughter, who she shares with boyfriend Dom Fenison. Six days after g… [+646 chars]"
        },
        {
          "source": { "id": null, "name": "BBC News" },
          "author": "https://www.facebook.com/bbcnews",
          "title": "Gavin Williamson: Rishi Sunak faces questions following resignation - BBC",
          "description": "The PM's judgement is likely to come under scrutiny after his minister quits following bullying claims.",
          "url": "https://www.bbc.com/news/uk-politics-63563639",
          "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/37F6/production/_127562341_5f70e49814992636cf71f79e99e95a44bb4a58a60_114_5782_32531000x563.jpg",
          "publishedAt": "2022-11-09T03:23:40Z",
          "content": "Prime Minister Rishi Sunak is facing questions about his judgement following the resignation of cabinet minister Sir Gavin Williamson after bullying claims.\r\nMr Sunak is set to face MPs at Prime Mini… [+4625 chars]"
        },
        {
          "source": { "id": "google-news", "name": "Google News" },
          "author": null,
          "title": "DeSantis touts Florida’s ‘rewritten’ political map as supporters chant ‘two more years’ - The Hill",
          "description": "CHandan",
          "url": "https://news.google.com/__i/rss/rd/articles/CBMigQFodHRwczovL3RoZWhpbGwuY29tL2hvbWVuZXdzL2NhbXBhaWduLzM3MjYyNzUtZGVzYW50aXMtdG91dHMtZmxvcmlkYXMtcmV3cml0dGVuLXBvbGl0aWNhbC1tYXAtYXMtc3VwcG9ydGVycy1jaGFudC10d28tbW9yZS15ZWFycy_SAQA?oc=5",
          "urlToImage": null,
          "publishedAt": "2022-11-09T03:04:00Z",
          "content": null
        },
        {
          "source": { "id": "cbs-news", "name": "CBS News" },
          "author": "Caitlin O'Kane",
          "title": "Maura Healey makes history as first openly lesbian U.S. governor and first woman elected governor of Massachusetts - CBS News",
          "description": "Healey, the state attorney general, was previously a civil rights lawyer who led the first state challenge to the Defense of Marriage Act, which banned same-sex marriage.",
          "url": "https://www.cbsnews.com/news/maura-healey-governor-massachusetts-woman-lesbian-history/",
          "urlToImage": "https://assets3.cbsnewsstatic.com/hub/i/r/2022/09/07/4f34e249-fa6f-4223-ae4c-231aea7e9bae/thumbnail/1200x630/afee36a8afc697a4030f4af9211b69fe/healey2.jpg",
          "publishedAt": "2022-11-09T02:59:00Z",
          "content": "Maura Healey hopes campaign serves as inspiration \r\nMaura Healey hopes campaign serves as inspiration02:00\r\nMaura Healey made history on Election Day, becoming the first woman to be elected governor … [+1796 chars]"
        },
        {
          "source": { "id": null, "name": "Sports Illustrated" },
          "author": "Pat Forde",
          "title": "College Football Playoff Ranking Reaction: TCU Gets Its Due Respect - Sports Illustrated",
          "description": "The Horned Frogs vaulted into the top four as one of the country’s last undefeated teams. Plus, more on the ACC’s struggles and high spots for bluebloods.",
          "url": "https://www.si.com/college/2022/11/09/college-football-playoff-rankings-tcu-clemson-texas-notre-dame",
          "urlToImage": "https://www.si.com/.image/t_share/MTkzNjE2MTQ2NzE5NTgxNjgw/max-duggan.jpg",
          "publishedAt": "2022-11-09T02:38:37Z",
          "content": "With half of the College Football Playoff selection committee’s top six teams losing over the weekend, a Tuesday shakeup was inevitable. We got it. This wasn’t a free-fall, but we saw a series of sig… [+4722 chars]"
        },
        {
          "source": { "id": null, "name": "MarketWatch" },
          "author": "Jon Swartz, , Jeremy C. Owens",
          "title": "Disney stock dives after earnings and revenue miss, sales growth forecast to slow after record year - MarketWatch",
          "description": "Disney finishes fiscal year with biggest sales total in history and strongest sales growth since 1996, but CFO predicts revenue will grow by less than 10% in the new year while reporting weaker fourth quarter profit and revenue than expected",
          "url": "https://www.marketwatch.com/story/disney-posts-wide-earnings-and-sales-miss-to-wrap-up-record-year-stock-falls-6-11667942471",
          "urlToImage": "https://images.mktw.net/im-604180/social",
          "publishedAt": "2022-11-09T01:10:00Z",
          "content": "Walt Disney Co. wrapped up its fiscal year with record sales and its best revenue growth in more than 25 years, but executives predicted much slower sales increases in the year ahead while missing ex… [+5259 chars]"
        },
        {
          "source": { "id": null, "name": "CNBC" },
          "author": "Krystal Hur",
          "title": "Jim Cramer says to ‘hope for the best, prepare for the worst’ ahead of October CPI report - CNBC",
          "description": "The October CPI reading could give clues on whether the Federal Reserve will adjust the pace of interest rate hikes next month.",
          "url": "https://www.cnbc.com/2022/11/08/jim-cramer-says-to-hope-for-the-best-prepare-for-the-worst-ahead-of-october-cpi-report.html",
          "urlToImage": "https://image.cnbcfm.com/api/v1/image/107109967-1661524568032-NUP_198430_00186r.jpg?v=1667953363&w=1920&h=1080",
          "publishedAt": "2022-11-09T00:22:00Z",
          "content": "CNBC's Jim Cramer on Tuesday gave investors his expectations for October's consumer price index report.\r\n\"Maybe this time will be different, and it could be. But right now when it comes to the CPI, I… [+1197 chars]"
        },
        {
          "source": { "id": null, "name": "Push Square" },
          "author": "Sammy Barker",
          "title": "God of War Ragnarok PS5, PS4 Reviewer Threatened Over Lower Score - Push Square",
          "description": "Twitter trolls should be both sorry and better",
          "url": "https://www.pushsquare.com/news/2022/11/god-of-war-ragnarok-ps5-ps4-reviewer-threatened-over-lower-score",
          "urlToImage": "https://images.pushsquare.com/dae22e0ea06b7/1280x720.jpg",
          "publishedAt": "2022-11-09T00:00:00Z",
          "content": "Were obviously huge fans of God of War Ragnarok here at Push Square we awarded the sequel our highest possible score but we also welcome a variety of different opinions. While the majority of the med… [+1264 chars]"
        }
      ]
    constructor(){
        super();        
       this.state={
          article: this.articles,
          loading: false,

       }
    }
    async componentDidMount(){
       let url = "https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=7b026a4303bc4226a9a6c16d358efbb0";
       let data = await fetch(url);
      let parsedData  = await data.json();
      this.setState({article:parsedData.articles});
      }  
  render() {
    return (
      
        <div className='container my-3'>
            <h1>KhabriChacha</h1>
       <div className="row">
        {this.state.article.map((element)=>{
            return <div className="col-md-4 my-3" key = {element.url}>
            <NewsItem title = {element.title?element.title.slice(0,45):""} description={element.description?element.description.slice(0,88):""} imageUrl={element.urlToImage} newsUrl={element.url}/>
            </div>

        })}
       </div>
      </div> 
    )
  }
}

export default New
