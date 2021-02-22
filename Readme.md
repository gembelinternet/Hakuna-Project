# Hakuna Project | Public :coffee:

## How to Use?

```javascript
// Initialize class
Hakuna = new Hakuna(<AuthToken>);

// Room list
Hakuna.Room().top().then(response => {
	console.log(response.data)
}, Helpers.app.promise);

```

### User lookup

**Example**

```javascript
var MyHakuna = new Hakuna('REPLACE-YOUR-BEARER-TOKEN-HERE');
MyHakuna.User().lookup_by_hakuna_id('m2c044bkvnax722').then(response => {
	console.log(response.data)
}, Helpers.app.promise);
```

**Response**

```json
{
    "displayName": "G3MB3L INT3RN3T",
    "join": 1609637199631,
    "birthYear": 1996,
    "gender": "MALE",
    "profileImageUrl": "https://d3m3bht8x2kdhf.cloudfront.net/public/2021-02-14/2600d347-a82a-47a3-a307-f880e6163763",
    "profileThumbnailUrl": "https://d3afe20c6q8n7u.cloudfront.net/thumbnail/public/2021-02-14/2600d347-a82a-47a3-a307-f880e6163763",
    "status": "Penetration System",
    "following": true,
    "followedBy": true,
    "followingCount": 113,
    "followersCount": 115,
    "country": "ID",
    "receivedStars": 345,
    "consumedDiamonds": 160,
    "hakunaId": "m2c044bkvnax722",
    "topFanInfos": [
        {
            "hakunaId": "nmejnm7eb4xi022",
            "displayName": "`Snow",
            "profileImageUrl": "https://d3m3bht8x2kdhf.cloudfront.net/public/2021-02-10/ffbb11e2-9f20-42d7-9888-3200625b2f08.jpg",
            "profileThumbnailUrl": "https://d3afe20c6q8n7u.cloudfront.net/thumbnail/public/2021-02-10/ffbb11e2-9f20-42d7-9888-3200625b2f08.jpg",
            "gender": "FEMALE",
            "country": "ID",
            "fanRanking": 1,
            "starContributedAmount": 66,
            "userId": 13180685
        },
        {
            "hakunaId": "ncguuceb2tr8x22",
            "displayName": "ᵏᵇˣ♔ßᴇɢᴇ",
            "profileImageUrl": "https://d3m3bht8x2kdhf.cloudfront.net/public/2021-02-15/8acc1a35-b854-4e17-850a-cbe554523e9e.jpg",
            "profileThumbnailUrl": "https://d3afe20c6q8n7u.cloudfront.net/thumbnail/public/2021-02-15/8acc1a35-b854-4e17-850a-cbe554523e9e.jpg",
            "gender": "MALE",
            "country": "ID",
            "fanRanking": 2,
            "starContributedAmount": 56,
            "userId": 12830641
        },
        {
            "hakunaId": "nfh06psz7hclr22",
            "displayName": "dendy@Kk.ANOM.S",
            "profileImageUrl": "https://d3m3bht8x2kdhf.cloudfront.net/public/2021-02-10/06a12767-7e40-413d-94d4-300b14716afb.jpg",
            "profileThumbnailUrl": "https://d3afe20c6q8n7u.cloudfront.net/thumbnail/public/2021-02-10/06a12767-7e40-413d-94d4-300b14716afb.jpg",
            "gender": "MALE",
            "country": "ID",
            "fanRanking": 3,
            "starContributedAmount": 30,
            "userId": 11111162
        }
    ],
    "userLevel": {
        "level": 6,
        "tier": {
            "type": "TIER_IRON",
            "name": "‎Iron‎",
            "primaryColor": "#C3B9AF",
            "order": 2,
            "crown": null
        }
    },
    "decoration": {
        "chatBadgeUrls": [],
        "profileDecorationUrl": null,
        "compactProfileDecorationUrl": null,
        "chatTextColor": null,
        "chatBackgroundColor": null
    },
    "age": 24,
    "userId": 12843615,
    "allowVisitorPostingFanboard": true,
    "receiveGiftAvailable": true,
    "starRanking": null,
    "diamondRanking": null,
    "team": null,
    "agent": false,
    "partnerHostInfo": null,
    "currentLiveRoomId": null
}
```

![Lookup By Hakuna ID](screenshot/lookup-by-hakuna-id.png)