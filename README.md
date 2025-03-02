# Expense Tracker
- Split-wise
- Monthly budget
- Achievement/Progress Road
- Budget Notifications(Duolingo + Zomato Style)

## Potential feature
- SMS Detection

## API
- /addTransaction/

- /fetchTransaction/{transactionId}
- /fetchTransaction/all

- /fetchTransaction/filter

```json
{
  "time": {
    "from":"",
    "to":""
  },
  "amount": {
    "min": 0,
    "max": 0,
    "exact": 0
  }
}
```

- /stats/filter
```json
{
  "time": {
    "from":"",
    "to":""
  }
}
```

- /login
- /signup
- /resetPass