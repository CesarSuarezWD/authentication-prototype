import * as React from "react"

const GETHIRED = (props) => (
  <svg
    className = "GETHIRED-logo"
    data-name="Logo copia"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    // width={185}
    // height={49}
    {...props}
  >
    <image
      data-name="GETH RED"
      x={5}
      y={17}
      width={174}
      height={25}
      xlinkHref="data:img/png;base64,iVBORw0KGgoAAAANSUhEUgAAAK4AAAAZCAYAAACowxUjAAADX0lEQVR4nO1b7ZHaMBBdPGnAKYGUQH7lt1MClGBKgAoy5xKgBCghlBBKOEo4dRBlZK+MELvCJhhrD705jTlZkvXxtFqtVpMfv/5CC62bX7qNMH8FAMxA63nzbOPtc90k1RU+nTIwXRunNZHffU//b79jvtG824DW5XVaKv+NOK1N/SsnXl/mqX9vQeull8+pWxt/Wa9zPSZk3nP5VL2o8u1Ts2287DuFfaYA6jZw6bwxumt8zHMNGirvvT6/9/L6PCH55BDSKSMDHoao7wDwGwDeatLSeMOg8ZkQD3Ickw2OTylgbDrxiSJujmTdAcC050dXSHaO5AnjYoNBCgyfPgDqVT9IXEPUP1TCHrBl5ImkUaJEQkiBFaRzt74+ce+RshSMfqI6pt0CwKRDqAR19hjw+/ErxlHoS9xHjxFX3k8A2DN5du5K7hI3pMcaEq6xM9wPfcd4F6cnkGwZ6LwTkT7U8Z91QijsJ6p9eaTq3AEAFlhvCjsbZ4k7DcxCU9g3RooeMX6CBF7jh7tK24ThwU3M/1EHh8aWEIjg8tQSd85U5NSDiBWGY5Rd8bqQKkQqZvWsLSO3iLtM0jNhRFA6upG6syyg7xxRTUiQDU4lkDC2XB2LLKCkP6thJRqbufAIK8fQddQRG/ipvYvqqdKNNUaUqgBW4nIf5TIlyECB9k9K4kqxpHBqah468g0Rd9VB+sQgKV8JvlTkSHsQZgIkeRgibjr5+nzYo5FfEkgBmAUk67OIe+tUJgaVpevJEXdSNTaOaNZcDNT+ocaI46DKAkp6aKlP1gZZmAnxDPPBcfCYBXaYnG0XML074xLGx/aG5C8Eup2ypjyr41KODVOhszShOS6lduQrYZtmin8nK3EBZyjX0LRJkwcVsBxI8cflJlm9mljicg2dolklkVceuLP+QsBKWjJqTet56JrDKkZlmOGtBkr6hrzKEsYH5WEFEa+kBboucqtCaxXx7bhLZqNm7y59eEbu9wco/F2PU9ME6Y89YwHqK3AePUZceVc3HRwsXG76xFXoHM55ofdB8iqLA5yuK2WjpqibEdzJmTVW32NYrvCmRCJuHDgEDkZi36hVeInhatX4Esi0x1A4Bmxqhh4wqIhPjl4dRtc1Y+h7AtqNWkzjZm/a8P4UAPAPbOG7Mde2EJkAAAAASUVORK5CYII="
    />
    <image
      data-name="38195224-vector-ganador-abstracta-el-hombre-l\xEDder-persona-icono- copia"
      x={96}
      width={56}
      height={46}
      xlinkHref="data:img/png;base64,iVBORw0KGgoAAAANSUhEUgAAADgAAAAuCAYAAAB9CdqYAAADnklEQVRogdWaR2gUURjHf4mxRbEXiGIDxYJHsaJGPVjwakAUPViOIjY8iSi2m4IExSCoURQV8WCBxII1qCjGElQUS6yIGIkm2ayRb/KNvkxmZndNNvvmB4+deW2//77v9c2atO03xCXEoT4OMQn1/0KdhFjjZ21Mn2P6bKSZZWJal9QpdWeOrOw0fXUW0D6TypSGdAiUOhuAGDBMQ6ZIqgWnAwuByUka6fqkCNsHdMygQHKAdvqrxzxpvYHDwEygA/ALKAFWAh8S1NsXOAPsBZ7qd8TTqCMQEdYTGOvJIPFHgTkqTugMzAeKgS4hdQ4ALgKvgQMalxFxbh/sCsxWUS7ijrMCCuUD4wLSBgIngZHa0pkS5uL0wRHAYqCXkTDKI9jLaJ+4Idq6E4AVwPu0m58EIiJPf/F5RvY3CYpWeN6Han+dClwBjrW5En8cFx2iSXONLKXAtYBCZcBd41363CFgCvATWG2Ba7o4LjpIX2aoseiIKm52x1PgNrAEqNL3fsARFYdOCw/azv7EyDTRR3PJ53jgtL5X6IAyERgOvASuA9WGuPXqlsIXYJdN4sRFczwTcYEhEBVTosFE5sgNwDJjMNoCfGw725PCcdFORk5xtf4JSsq0skbFddO4h8acZxXZnkVxnvbFIHJU3CpDnLBVVzq24bvYXhBi5FpgI5BrxMnAc9bG1iNgMs/3WboJy4FNPovn7UBtmuxrKb67ie7AIk/cNGCHp7+io+oFO7U1kh3Qdwp0CYeuO6WVevjk2w3UpdvIFtDgt00SBgNLgTHATp0Lva19zzOl2IjjokGHJutURH5AemFIWWuQYf9bgDE5GvyotHnkNHBc9N1/FDyuSzPbcVy0MkUjZVDZHwFxuC34JMVCl4HnaTKo1cnWs5NUKI7C4KI4LlqdQn96H4GpoQki8KvPEUQQJ4z9YBRw+qCsIx8lYawcQ5yPkDjMtejLJDK/AK6m2aBWxxV4CahJUHmJxbuGIP7uBx8DnxNkPpUZG1uGK1Ba5lxITW9TGIhsosl+sDTEsPtJXLjYSJMji5shy7ayCIpzMAXKJH4jIF+Y+9pMsyOLIh9jPyVxV2EtXoG3gHJPnLjn94jqa3Zs+EPvGkzKLbpMSRXfU7Uiz91eqrsNq/ATKIvvPfpc8x/7RZsI/BtJoW5q5cTtWYQFBl5Ty/3fZh1cqgLyRIKwe3j3Kjo3QnqaESZQVjUHdWSNLIn+6fQqwlMEAH8AOnbWNkFDRuwAAAAASUVORK5CYII="
    />
  </svg>
)

export default GETHIRED
