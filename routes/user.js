var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  let products=[
    {
    name:"iphon 11",
    category:'mobile',
    imag:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmNlaLKqeNnGzVcNxq1frPaaPpFpwlKSUjS9Hu3AV9zMjukIs2KLo1KMDr9jABfnuZXJJB7fM&usqp=CAc",
    description:"this is a good product"
  },
  {
    name:"oppo",
    category:'mobile',
    imag:"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxIQEBUPEBIVFRUVFRAVEA8VFRUQDw8QFRUWFhUVFRUYHiggGBolHRUVITEhJSkrLi4uFx8zODMsNygtLisBCgoKDg0OGhAQGC0dHSUtLS0tLS0tLS0tLS0rLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLf/AABEIAMIBAwMBEQACEQEDEQH/xAAbAAACAwEBAQAAAAAAAAAAAAACAwEEBQYHAP/EAEkQAAIBAgMEBQULCQcFAAAAAAECAAMRBBIhBQYxQRNRYXGBIjKRodEHFCNyc5KxssHC0hUWM1JTVGLh8BckQkOCovFjk6Ozw//EABsBAAIDAQEBAAAAAAAAAAAAAAECAAMEBQYH/8QAMhEAAgIBAwEGBgICAgMBAAAAAAECEQMEEiExBRMUQVFxIjJSYYGhkcEVM0KxI9HwBv/aAAwDAQACEQMRAD8ApUp5VncLVMRGQs0xFYSwgigHqsBA8sBA0ikLFOAhZpLJtcugE0upp4QDTrlOb4YuySdrg2MwAvynnpScpfcyU2yicWM4PHiAPtnc0eNYlb6su7t7aNfDVFIueU72n22pNdDFki0zQVri4noYyUlaMz4FYwqEbObLbXui5XBQe/oFXfHUyd20ZVbNe1xlHABeU4nZlpy5pehr1XLRtgTvJUqMYnFXCkic7tGM1jcoMsx03ycxtDaTI1ibgEWF7XP2zys8uSL+J2kdTFgjJejNOnUNSmAeY8RMWTtHNkuEeiM7ioStFbZWFy1SrcOK9RE3dnSjnkk2WZ5rZaOgakCLT18tHicKo5qk7OY2rssm+Xwnk82B26Ophz8KzmKosSDMaNyK7xkES8dBEtHRBLGOgUKYx0QUxjogpjGQRTGOhRd4xB1IxmZy1TMrZCzTikLNOKyFhYCBwECWAg+nAQtA2F51uz8KatmPUTa6BCpzJtpOb2govLXkasK+BWQK9SowUMbDq4GcicceJbkuS5KKV0bNCgVFz/OLg10VKpGeU7fBdwFRMurDQnQnzf5TvaXNFx45X/RmzJpgUtpspurKUuT5RAsL8pdi12oxOox3RJLDB9eGMrY+lVQdJUpgcSmYcRL9Rnlnx/HwvQrjHu5fD19RlLbFBltnXuJUfbGhnxvFtcX/AALLDKLFrvNh1bI9QdjDyl8bS7B2mr2ZIv3p/sMtLKt0S2+18OynLWpnT9dfbL9Vq8bxSUeW/sypY5RfKObx/RM2bpaVuI8tfXrPKZ8OaSaUX/B0cWZI0MJtjDiw6alwtbOvtnO0MJ4M+7JB1z5MoyxbB2rjgMj0SG1OqkEEdXbN8ZRjmcsfC9q5LMENyakaWE2wjUwSbG2q8wZ6DH2ou6qXUzS00lLjoL2fjVqFl6iSO6YdNljK4y9x8uJxSZze82GCvnXnx75ztTFRycG/TTbjTMBzKkahLmWIglzHRBLGOiCmMdEFMY6IKYxkQUxliFFkw0QbTaMzOWqbStkLVNooSwjRQD1aKQMNIQNWikH02gZBjYjS00R13dRpEjpe8fIpqxJsefpnLeRzluZu7qKjwbGxaFjcm/CY9c7XBhyv4TK91Xe1tm4RRRIFasWSkxF+jVRd6luZF1A7WHdL+wuzY6zNeT5I8v7vyRgyTcVaPFDsXEYkHEYmqxJOrPeo1yLgEk6Hsn1nTdjVBLiC8kkc7Jnt+o+hugGGtW3+gcfTNL7IS/5/opeoryLg3FS36c/9se2Vf4tfWJ4x/SC25KA26Y/MHth/xS+thWrf0n1fcYoCzFwFsWJpgZQdBfxirs7G+FkH8RL6Si+7aa+WdDbzRLP8SvrYfEP0CobpF1LrnKr5zBLheevhFfZsIunMnfvyQGP3WFBS1RmULbNopK3FxcA3F5X4PDt3LJx6+we9ndbRGzcZWwDLicLVut1zDUI4vwdeY9Y7Jztb2fCeO38UfXzRfh1DjKujPWt297BjCFy5CRe17356GeY1fZeTDi7xco7OPLGfudDi8SaNqg5c+ztnGinJ8FrqqZXxePNdb8ZVKE91yHx7V0Mt2jpFwl2jpEoSxliRBTGOgCmMdIgpjGSIKYx0gCmMdIAsmMAKm0ZooLVN5W0Qs03iNBLCPFIOWpBQAw8ARivAQ0cJSut5WwWVqpOY25TNkXJuwNbSs7kG8MIKhp5FW2JcTaRUAl7W5XsTC8KlxRmcH5o8791PaJr1cHm4KanHtenf6J6T/wDO6eONyS83E5faCqq+4DVmt0dzYm9v8N/+J9QaV2cIuYJr68hw7YsiqRol5TRSVK1XifAeHGFIZFbEY2o1w1RyDbMCzEGxBAIvrykWOK6Ist+pSrNrb+u2FhEHFMosrEA8gSAfCVSr0GVia+IaoMrsWHMMxYcLcDKXGNVSGt+pSxyfAuAAAFOnIcJl1EUsTSXFBhL402dfufsYjC0MUG4+Uw4WCsQbHwnmM/a2KEJaaS5O9hxNxUkdjj2L0rZr9QnlON9o3tC90burU34qTbtWWZ4pu0ZotoPatHI/YZlqmbMcrRns0dItEs0dIgtmjJAFO0dIAljLKILYxkhRbGOkQXeGgAo8dozosI8RoJYp1IjRB61ItBGLUi0QYtSLQRyVIKIy7Ux2UWHE6DvMvjp/h3Mo3/FQ9Blp3t9s5UsqlKka9pn9PnJsCL9fVHktqNmCHFsTj6IAzdUOGbbo0J3Fpnnu/NUNUwxHW5/3U56rsaLjJ36o832m03H8mnsuitR3NS+VKb1CAcpexAAuQbaka2Ok+iZZuNV5tI4KR02zdjU3PkhyvwBtmUGjTq08+Zjby7aiwtw7ZkyaiS68dfy06/ArxpiMElN6io5BDWF8/RCmbniWBB0GneNZZkclFtf+ymKTYf5LVkd8jgKcQCSwBw/RrmVWS16hNwCRwv2St5mpJWvL83/0WKCo5m/Oa+ghXZvZ7YjCDhKdJmPSuycMhVc+t9bi/V9kzzck1XJYq8x6UcNmKmpUI4Coq6E5mscpF7Wy9R1MqblXCA9vqVNp0AtGtY3GV7G1iQOGnKVaj/VL2K4S/wDIvc0dh7zGlgKOHGts2YWtYF2PHxni83Zff5pZf/uh6XFnUccUddsjaHSJxBGnbacTUYnjlTN8KkrRp4CoKbZ1trx7ZRb8ySgmgdrYrPaM1YMaoy2aRIvsWxjJEsSxjpEEu0dIApmj0AAmMgAMYyABeNQLEI8taM45HiNBHLUiOIRq1IjQRq1ItEGrUitEQ6m8XoMWcFTzOLyanVNYtqJjw1LcbONrKq27rTj4YSlIssw8Rigp8kHlczprC5mrT5IpNSBxSuy35WvbrEkYLHKmGWdPiJ59vwlqtAcrtp1eUl56Tsd237o4faVXH8mns7Fim5uuZWRqdRb5CUbqaxsRYG9jPoeSO5UnVOzg2buH20Ba9IWRqbUVzkdGUQIoY28vRQTw8JQ9Px83W7/Lv8COf2E+/FH6RA4ymwB6IjXNxA14ka30PLSWODr4XX7K1XmiH20Td3pqagNY0nuVFMVRZhl/xWubXPfeV+HpUnxxf3os3mK/CwlzKwV8khrA2KnKfNPOx7DK5dAlo7QS4Iw1HQEWsbG9u3s9cyuD+pjb16E4RwHzLTUcbKL2UE3Aub93dEy4t8asr71J3QO1qFsNVP8A06h9Uq1H+tr7FOKd5Y+5mbA2O9bDpUXgQ3pDMPsnCx63Hik4SPT48LlFNHS7ApNRBU8zw9U4Xac8eWdxN+GDguR2L2q9J+Gl/RMePTqcSZMuxlw4zML29kWODgdZCc0pca4LrAZoUiWKZo6RLEs0dIgpmjpABLQ0CxbGMgAExgFRHl7RmGq8RoYarxWgjQ8SgjFeK0EcrxGgl7B0i3KUz4JdFpKxQ9szThuLoMDFVCxub6cJZgxeURcuRQVsZTUNof67ZbPHkxOyvFmhk6B4zFhFCkjXT+I6SvZKb3dWWrqefe6G4L4a1v8AMvbvpzv9iJ7pe8f7Ob2l/wAfyaO72yXxdcUaZA0LMx4Iotckd5GnbPomfNHFDczhpWdxhNxqZGZcQWHXkFvp1nOXabfSI09M4upcDH3DQ8a7fMHtk/yMvp/7E7leotvc/pn/AD3+avtk/wAhL6UHuV6kf2f0v27/ADVivXy+lA7pepP9n1L9s/zVivXS9ETuV6kr7ntH9tU9CxfGS9EDuF6jhuNRGi1nzWuLhSO82g8VLrXAktKn5nK7x4A0sPiUbitOqD1aKdR2SZZp4m/sYscXHOk/UV7nOJX3nTpmxsagI6iXLfQRPC9q4msrn60ey0krjRv4ykARacuMmbvIy9t4PpE09XXNGnzbZclWbFvjQVHDEIL8bajtl+LKtzQjhSQOaV5F8RbF8AloqQ9imaOkCxbGMSxLGOQEmGgAMYUgA3jEsoq00GYYrRGgjVaK0MNVorCNQxGEehiMJ0u77KVseImTKuRWBten5eYcOqVQZfjfAvBOAbtOnoIxczB2lbjwRtOrfWnoeVtJ18+KDh8RyNJKayKizsbZArKKlbym5X4KL8hPJ6nPKEtsOh6S/M8290ekq4mmEOl27rgpe09J2JKW231tHO1/Vfk6DdLaowdbpWUlXBRkHn5WIObXqyifQdVg77HtOIpUzuqe+GDQXzVTmNrlCeHK4nLWhzJKP9jLJH1DXfTCsbDpD/o/nD4HN9v5J3sUBU32wo49J8z+cD0WVen8g76JC77YXqq/MHtg8Hk+wHmiEN88N1Vfmr+KDwmQHfwDXfHD/q1fmr+KL4WYPFQGLvPQY5lSoWtYXAH2xfDyQr1kEqOV3pqmphsU54tSrGw4DyDpDkVQa+xjxycsyk/UxPc1UDCZyP8ANf6Fniu15vvFD7HstFD4GzrsUwqebf0WtORHjqa0mU0osGsTLH9hhuJqALaCKdimNUbWakQUWjJEAZoyRBbNGoliy0NABJjUSwGMIAbwgM9WmgzjFaAI1TEaGQ5DEaCPSIxh6SthL2DrlDcSqaslGgmIzEXlPdjKVF8YZCNeMCnLG7Qje7hiHoomt5ZLVZJ/CGGOK5orPtxFBU8Ooc+/lJ4Kc+RnNI4P3RGDPh3HM1fpp+2dvseDi5J+qMHaH/H8jaWrXN7D0dlvQfTPpLOCzSo0iUsFFwV053Opi3RW3yH0oU2Auwvw019gitiAvXBIuosBa3Z1xbFHF16rdQA08TEYrJyg8PE9srkVyH06Rv8AbKn0EZr4WjYTNOVgUQd4U/ueI+QrfUaZ8j+Fl2NfGvcw/c4t+TyTyrVPqpPC9r34lV6L+z2eif8A4/ybNbGFPN17JlxwT6mplf8AKLnitpcoRQrsTXxBaGl5ESK5aMEAtDRAGMZIAtjGSAATGIAWhoFgloaADeGiGeDNBnGqYrChyGKxkPSVsYekRhQ+mZWwlhHlbQQzVgoJAx7rwY93GHu0+oKQutj3PFoViV9A2UmbMf6EvUnFdRHyZfuhU7Lg+Wtf/wCM3dk5HOcvdf2YdaqS/Jo+9GU2HP0DjqZ9Js4DkgVVlJCc7Zm7dL2Pdp4xWK2hxA1PM+gdtucVi2LcjuHrMFAo+S/H0dVokkBlzDU7mUyKWauGw5JvKJSoijZoppoJnkHoV9vD+6V/ka//AK2mefRlkOJI43cwlMEDc2apUJHaLL90TyXaC3Zq9Ej12k4gbYqXmDbRsIJhRBZMYgDGMiCyYQAExgAMYyQACYaIATGAAWjABzSEKIMvM4xTFYRyGKxh6NK2hkOV4rQ1jVqRNpLCFWDaE+NWTaEAvDRCpia/KWwgJKRZ2edReU5R4mf7o9W/vXsNX19F7Jt7GjUpfj+zFr+iN4vPpdHmqFkgcPQNdO6KAF1vpa15BSpVU8hDwNa8xtBS3HwErkKy/TNvZKZCUjRw1Q8BM8kuoTQpNaZZKx1ERts/3Wv8jX+o0oycplsIq1Zwe6FUtgin6tRwvXYhW18SZ5bXJLMn6o9Jpecf5NnDE2mLJVm2I4mVjAExkQW0YDAJhAATGRBbGMgMEmMAAmEAsmMkAC8ICkDL6KA1MUI1WisZDVeI0FMaHgoNhCpBQwQeLQSc8lEs+zSUEQ1LMY6lSEaHq2XWVtWx74Of3uxXSGl2M3ry+ydLs+GyT/Bg1krSPTt0tnJXrstVcwWmzBblQzZlAuR3z22syyx41tdcnEwwUpUzqcVu1hSjZaGU5WOe7qVIGlrnU38JzY6vMmrlZfLDA82p6nXhzE6+ebhBtE7L08M+qjjnyuf0i9XwtFaC1M16jswFML5KqujFm69V0HXOU9Xk9T1seytNPNLH3KUUuXfNvpX7B2Lgw+Ip034NUUMBp5N+F50MmRrG5L0PDTglmcPJNr+GekDYWEvlFBOF7a3twnI7/J9Rs7mHocni8KtPEPSTRQ9hzIF/5zYpOUFJ+hilFKbSOgxZo0qgQUUyjRyfO7JkUMs1f8HUwYNPNSTdSXkYW99JUSuFFgaNQheq9MwU3FmGaUch5ruYLYZiebkjwVR9k8t2g7yJfY9Fol8D9zoKSznyNaJMiGBJhILJjUBgGFAAYxgAGMAAxkAWxhQBZMYAF4xCgGl7RmGKYtDDFMUIxWitDBhoKCGGgoIQaCg2TmgogNSpYQpEbNHZtLMtzM+Z0yJ2ZW2cVluBNenx7ivJkpHK7QqlshP63snUwx2yMGVto9t3cxHQVekVSwKZCpKo3lEEEXOvmz1Gpj3kKbo5eN07N3FbwtlZVoNcggZqlMKCRxOt5ijpo2rl+mXPI66HBU6BLZRx4cuPfOpmismNq6E0Oqelzxy1deX6NTHUa9SlSpPky0lOUqFzEHjc5tTYTkeF3P5v0z0GPt3FhnPJDE25eslX/QnZxNKqjgC6spAPM35nkJ0ppOG1+h5V5HLI5vq3f8s7QbeJN+hF7W/TKNOPC05ncL6v0bO9fp+zncTiC9VqhABLE2GoHjzmpRSikZJSuVs3Km0Ufy2oITz+EABPaCszpSjwpP8Ag1Ry09yXPuYe8tc1ErOQB8FUAAOYABCOPOCvgook907Z5nurVthwP42+yeY1eO539jvafLtVHT4Q+TOVkXJ0E7AqnWFDoXeMQEmEABMNEAJjIADGMAAmMAWxhQGLJjIUC8YBnK00UZxgaK0EMNFaDYYaChrDDRaCEHkoNhZ4KDZ9ngolgu14UiWXsLi8q2lM8e5hj0MbaVMvczbhkolGSDZj7Uo5ET4x+ybMM90zNmhtij1s6AE8LDtnrtySs4vL4QFfBugBqI6g+aWRhfxMCzwfCZHCXofYXBM7qiJdidBexPPwjTyJK2ytJt0jaO7uIJPkoDxKhlL+k8Jk8Vj9S14JmWtE3y2sb2I537Za5KrZQ+OpYGCbsmfv4FffRPhTsbc4d1qyyLVWP6M8IXBlqgyrtBPgqnydT6plWRUmiVTPN91Kd6H+tvoE8rq8m2dfY7uHFuVnQo1pzZcs6UFSPi0FFgJaGgAFoaIAWjJAsEtDQLALRkgAEwpAAYxkgCmMahQM0NAMsPNVGawxUgoNhCpBtDYQqxdpNwYqwbRrCFWDaRSJ6WDaGz7pZNpNwDVo20m4fQJaVy4HhyE5txgXPQjddTI3hPwafGP0TXpeJMy6l3FHsGArIlSk9S2VWUk2uBobE9xsfCeszJvG0jiYq3HR7dx9I4Z1aojs+lNUsbnSxAueHG85+KEt64NUqoxt3ABiU5ecLnjcqec36m3jZiw/OjrKdE+SMliCCX5acTfnfX0zmWbjjq9umY8ukYjuzHWdF/6/wcvIrcjYSunQGkXFyc1srXB00v4cZy9xXGUe52bv0zGY+UZ0MXyIbH8qOg2fiqC0wrix1ubXJ143Ep1Wnef4Zco3YtRGC9GYG0wClW3DLUt3WMumqXPp/RRu3Ss8x3NNsMT/ABt9Czx+v/2L2PTaP/X+TRavrKNnBpUuQjWi7RrBNWHaCwDWjbQWAasO0Fg9LDtBuBNWHaCwTVholgGpDQLAapGSFsXnhoFmcKZmm0ZqYQpGS0GmEKJi7kSmEKJk3IamEKBg3olMIUDBvQaJ6AwbkSmScOZN6DtFvQMZSQriy1s1spsZVnVotwypl/GUcwuJVp5U6Y2oVq0cttq4VQes/ROnjStnOnK4nsSDQaX0Fx19k9Z5HHfAwspGlMA9dyYqi0+XYXJPyIp6G9r25Qy6CJ82WziBzT/e/r1lGz7/AKLHk+xWUAWJ17ORjspHdMP2Y9J9sr2fca4/SKLDiBbs6oaAWExAI/Rr1c9fXE2fcdT+wrGtem5sBdHsB8UwOPBLtnmm6C3wbfKt9RJ47XOsy9j0mk+R+5fGEPGUPIjUoEHDGTvEHaCcMYd6BtAOGMO9E2sH3sYd6BtI97GHegbAThzDvRNoBw5h3g2sE4cw7wbQDQMO8G0HoDDuQNo4YcQb2DaMXDiK5sO0YMOIu9jbUGMOIN7DSCGHEXeybUMFAQb2GkSKAk3MlI+aiJFJkpCXoiMpMFFapSA1EsUhGqNLZihtDMuaTjyjRBKaow9+sAKaow5sR6pt7O1Dytp+Rj12GMIpo9U2LhOndKd7AgFjzAAubT22Sfdw3Hnox3So232Xh6iMtMFKigmxYtfjx7DbsmBayUcqhJ9SyOLfBySarg52mLzqeZVBXJJm9X2GioxFQllUsRYW0F7HqvMkdS3JJx4Zq7qHoYZ0lmRtJtGbHBSyqL6XX7N2nu+pVWasRcKeC2uRw4zld7Pq5nZk8CbisEXXuYGSxPZwnRwTcsabORrccYZ5RiqXp+EbtPDobALoNHuL37jy8ZmlkmmPDHFxuv2Zu2aQXOBwytYeBl8G3DkokqlweVblsegYcukJ8cqzyHaC+Nex6XRfI/c6RWE51M2h6QchIyiHkBBQSWQjIIbACUElkBNONYADShsDAalGUgCzSjbiAdHDuBQlRLGVDFEAQwIoQ4CH14KCTeQh9eQJBMgASISUIqpHTA0W9l3DTPqEmjRiZT90WqDh6Q59IfqGWdkRayS9v7M3aL+CPud/sis6mm9O2ZVU66AiwBGvfPoU0nCpHl02pWjaq7RbIy0qKoXv0j5wWJPaezTjpMcMEFK27/BolmnKKj5L9GNQFzb/AI9M2SdcmeDppmu+KrsnR3BFtfKW5XqJ6pnSxKW6jR3j9DIqcTe3E9sta3Jr1Mik4z3eadlsVawAAqDhp5Sadk5XgPLc/wCDsvtKD57pfyUiDe3brzE6eLGscFFHJz5XlyOb4s2KGKbSwW5sfP7LcOXCZniim+pcs03FLjgobRctnJt5rDTUcDzl0VUSiTuVs8v3GANB/lPurPG9o/Ovb+z0mi+R+50Qpzn2bQssFkIhIfSEBMgCLwgBJhIDeEBBMJACISA2hJZRBmgpDUxSIMPBQxOaSiE3gIEIAkyBPoCH1pA0CRDZKHUTaVyVjrgwt9qmaknx/umbez41N+xj10rgvc9CwhuifFX6BPeLojzMupYvAyBqYrQQ1S5sBc8gNSYjBR89M2BymxGYGxsVva/dfSRNX1FadChTINiLW5cIzfoCqGgRQjFEVkIrea3c30QEs8w3JPwD/KfdWeL7Q/2L2/s9Ro/kfudEjznuJsQeaLQSM0JCC0IASYaJYJMgASYSEEwgBJhICTCAi8ICiDLyoIGAIQgCGIGEIQEDEASQIAkgQEJIkIARCEgmFIDZgb2H4Jfjj6rTbo18T9jHqvlXuejbPBNNLc0T6onuNyjBNnnJyUbbLi0G6volPiMb8ypZoeoaJeM2XjvezdXrEXcIJa58nXqA+yHhcg6mkuxaw4qB3svtlHfw/wDkW9zP0KlaiUYqwsRxEsUk1aK2mnTLybIqkA2Av5oLAE37JS88E6LVhmxOLwpp3VxrY9otaFTUlwUzi4umeR7lH4B/lPurPIa/517Hp9J8rOhSYWbEMiBs+kogJMJCIQAmEhEIATCQEwgBJhIReQhREvKg1gYQxFCGsDIEIAhiKENYAhQEPiJCAEQkAYRkKzB3sHwK/HH1Wm3Rv437GbVfKek7IPkUz/An1RPXauVYL9jy2o+V+5vYsq96qsovb4KxDA87crds43er1M+XbO5ppfbzM6kbG87yXBujzR1j7WoZTr1i2U34TCtPlvob7Ry9A/CAn9dTfxm2fRo564l+TdxuCqtWLAE3Pknko5E9gmbHkxrHTOupKqKG3D8O1v4fTlEbB8hy87+NmHvBsHG18U9VKbPTzU2pNnpkFOjUFaeZwaZzA6i3XfSZLSNi6GuKdVaNFcR+lFFRVBIYh9bglSR6JfifD9zFqfmR5HuT+hf5T7onle0PnR6LSfKzolnPZsQd4oxBMJASYaACWhIAWhoAJaGgAlo1EBLSUQEmNRAc0gpVEtECEBAxAFDFgCMWKEMRWQNYBgopD6QgJjEEOY6FMXenWgPjr9BmvSfP+DNqfkO/2BiFq4alUU6FE8GAsR4EET2mOSnjT8qPO5I1JpmkLwbILyX8Fe1egxqeUA34+qTdbGapAAw2JbHUqNxmJ8JW5c0FLixrVT1n0mLSGtn1NL8f69MjdC9WGWtoDoIK8xG2vMqbUx60KT1nNlRSSTzNtAO0nSSVRVsEU5SSR5fuUPgX+P8AdE8h2g/jXseq0nys6ICc9mxEwDAmEBBhRATCQEwogBhFBMJCDCQEiEgNobQpVEsEDBgIGDAEMGAIYikDWBhGCKEm8FBPryEAaMQrVJYhGU8bhulplDpfgeojgZbjnsluK5w3RowMLj8XgiVpuyAnUaNTY9YBBE7OHVSS+CXBzMuHn4kW/wA9cd+3/wDHT/DL/GZfUp7iHoCd88d+3/2U/wAMHjMvqTw+P0Pvzyx37wfmU/wweLy+pPD4/Q+/PPH/ALwfmU/wweJy+oe4x+hB3yx/7w3zaf4YPEZfqJ3GP0JO+WP/AHlvQn4ZPEZPUHh8foD+d+P/AHl/Qvsk8Tk+onh8f0iHxGKxrBXqPUtwztZF7bcPRKc2pdXNl2LArqCOw2VghQpCmNebN1seJnBzZe8nuZ18UNkaLglJaFaQhFpCEWkICRCQEiEhBhQATCAEwkAMJCIQFIS4qQYgCGBFCMAgChiiKQMCBhDVYrCGFgsJIWAgLLGRBLpGQrKmMbKpI8JdjjudCTlSMFsO1Q3Os6mPHxwYJyt8k/kw9Ut7ple5Bfko9Xqh7mQNyCGyj1SdzIm5Brsc9Uncsm5BjYx6pO5ZN6DXYh6pO5kTehi7EPVFeCQe8R8+zWTUCV5MMkuR45FZr7Nqll14icfNCpHRxytF0GUNFtn0AbPoCAmEgJhICYSAGFAYJjABMKIAYQA3hAUxLSoYIBhiwMIxYpAxAwoYsVhGCKwhCKEkSEIaFEEPLEKUNp+ZNGH5irL0F4EeTO7g+U5s+pdAl6Kh1tI6ASBCQag0isgdoCDFkAxgisArFDyTK8nQaPUztl8++ed1PzHYwfKX5lLz6Ah9IEEwkBMhATCiAwkBMIADCBgmEAMYh//Z",
    description:"this is a good product"
  },
  {
    name:"asus",
    category:'mobile',
    imag:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrCIva-4rMY0m6lFsa2yX9DvGhuEswUIcdX-pmVD3iwfKIFbBciqLvGLWyLCU-zvHF09TtJak&usqp=CAc",
    description:"this is a good product"
  },
  {
    name:"xiami",
    category:'mobile',
    imag:"data:image/jpeg;base64,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",
    description:"this is a good product"
  },
];
  res.render('index', { products,admin:false});
});

module.exports = router;
