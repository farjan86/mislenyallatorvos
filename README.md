# Kozármislenyi Állatorvosi Rendelő – weboldal-tervezet (demó)

Modern, mobilbarát weboldal-tervezet a [www.mislenyiallatorvos.hu](http://www.mislenyiallatorvos.hu) kiváltására.
Teljesen statikus (HTML + CSS + minimális JavaScript), bármilyen tárhelyen és GitHub Pages-en is azonnal hostolható.

## Mi van benne?

- **Egyoldalas főoldal** – bemutatkozás, alternatív gyógyászat, szolgáltatások, hasznos tudnivalók, elérhetőség + térkép
- **9 felfrissített ismeretterjesztő cikk** a régi oldal tartalmából (`cikkek/`)
- **Adatkezelési tájékoztató** (`adatvedelem.html`)
- Nyitvatartási kártya, amely automatikusan kiemeli a mai napot
- Kattintható telefonszámok, Google Térkép beágyazás, SEO-alapok (meta leírás, schema.org strukturált adat)
- Reszponzív, mobilon is jól használható; gyors, mert nincs mögötte adatbázis vagy CMS

## Hostolás GitHub Pages-en

1. Hozz létre egy új repository-t GitHubon (pl. `mislenyi-allatorvos-demo`).
2. Töltsd fel ennek a mappának a teljes tartalmát:
   ```
   git init
   git add .
   git commit -m "Allatorvosi weboldal demo"
   git branch -M main
   git remote add origin https://github.com/<felhasznalonev>/mislenyi-allatorvos-demo.git
   git push -u origin main
   ```
3. A repóban: **Settings → Pages → Source: Deploy from a branch → Branch: `main` / `(root)` → Save**
4. Pár perc múlva az oldal elérhető lesz itt:
   `https://<felhasznalonev>.github.io/mislenyi-allatorvos-demo/`
   Ezt a linket lehet elküldeni a doktornőnek.

## Miért érdemes lecserélni a régi oldalt? (közérthetően)

1. **Mobilon gyakorlatilag használhatatlan.** A régi oldal 2008 körüli technológiával készült, fix szélességű elrendezéssel – telefonon apró betűs, nagyítgatni kell. Ma a látogatók többsége mobilról keres állatorvost.
2. **A böngészők „Nem biztonságos” felirattal riasztják el a látogatót.** Az oldal HTTPS-tanúsítványa hibás, ezért a Chrome/Safari figyelmeztetést mutat. Ez bizalomvesztés, és a Google a találati listában is hátrébb sorolja miatta.
3. **Elavult, sérülékeny rendszer hajtja.** A régi Drupal 6-os motor több mint 10 éve nem kap biztonsági frissítést – bármikor feltörhetik, spam- vagy kártevőterjesztésre használhatják, ami a rendelő nevéhez kötődne.
4. **A készítő-üzemeltető cég (BB-IT Bt.) felszámolás alatt áll.** Ha a cég végleg megszűnik, az oldal bármikor eltűnhet, és nem lesz, aki javítsa vagy átadja a tartalmat. A csere így már nem csak esztétikai kérdés, hanem sürgető.
5. **A külső bizalmat ad el.** Egy állatorvosnál a gazdi bizalmat keres; egy 2008-as külsejű oldal azt sugallhatja, hogy a rendelő is megállt az időben – pedig épp friss szakképzettség van a háta mögött (alternatív gyógyászati szakállatorvosi képzés, 2025), amit egy modern oldal jól tudna kommunikálni.
6. **A Google-ban gyengén szerepel.** Nincsenek mai keresőoptimalizálási alapok (mobilbarát jelzés, strukturált adatok, gyors betöltés), így az „állatorvos Kozármisleny / Pécs” keresésekben rosszabbul teljesít, mint teljesíthetne.
7. **Egyetlen fotó sincs rajta.** Képek nélkül nehéz bizalmat és minőségérzetet kelteni.

## Élesítés előtti teendők

- A demóban ingyenes stockfotók (Unsplash) szerepelnek – éles indulás előtt érdemes lecserélni őket a rendelőről, a doktornőről és pácienseiről készült saját fotókra (`img/` mappa).
- Az adatkezelési tájékoztatóban a tárhelyszolgáltató/üzemeltető adatait aktualizálni kell.
- A `mislenyiallatorvos.hu` domain a jelenlegi szolgáltatótól elhozható és a GitHub Pages-hez (vagy más tárhelyhez) irányítható – ekkor ingyenes, automatikus HTTPS-t is kap.
- Tartalommódosítás: a régi oldal „Belépés” funkcióját (Drupal admin) itt a HTML-fájlok szerkesztése váltja ki. Ha a doktornő maga szeretné szerkeszteni a tartalmat, később ráépíthető egy egyszerű CMS (pl. Decap CMS) vagy vállalható a szerkesztés „karbantartási” szolgáltatásként.

## Képek forrása

A fotók az [Unsplash](https://unsplash.com)-ról származnak, az Unsplash licenc szerint szabadon, ingyenesen felhasználhatók kereskedelmi célra is, forrásmegjelölési kötelezettség nélkül.
