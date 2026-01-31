const { test, expect } = require('@playwright/test');

const testData = [
    { id: 'Pos_Fun_01', type: 'pass', input: 'mata ammaa oone.', expected: 'මට අම්මා ඕනෙ.' },
    { id: 'Pos_Fun_02', type: 'pass', input: 'mama kaeema kanna hadhanne, ehenam passe ennam.', expected: 'මම කෑම කන්න හදන්නෙ, එහෙනම් පස්සෙ එන්නම්.' },
    { id: 'Pos_Fun_03', type: 'pass', input: 'nivaadu nisaa, mama gedhara yanavaa.', expected: 'නිවාඩු නිසා, මම ගෙදර යනවා.' },
    { id: 'Pos_Fun_04', type: 'pass', input: 'oyaa kathaa karoth mama ahan innavaa.', expected: 'ඔයා කතා කරොත් මම අහන් ඉන්නවා.' },
    { id: 'Pos_Fun_05', type: 'pass', input: 'oyaata hodhadha? ', expected: 'ඔයාට හොදද?' },
    { id: 'Pos_Fun_06', type: 'pass', input: 'aapasu yanna.', expected: 'ආපසු යන්න.' },
    { id: 'Pos_Fun_07', type: 'pass', input: 'api adha yamu.', expected: 'අපි අද යමු.' },
    { id: 'Pos_Fun_08', type: 'pass', input: 'oyaa hariyata vaeda karanavaa.', expected: 'ඔයා හරියට වැඩ කරනවා.' },
    { id: 'Pos_Fun_09', type: 'pass', input: 'meeka hariyata vaeda karanne naee.', expected: 'මේක හරියට වැඩ කරන්නේ නෑ.' },
    { id: 'Pos_Fun_10', type: 'pass', input: 'suba dhavasak!', expected: 'සුබ දවසක්!' },
    { id: 'Pos_Fun_11', type: 'pass', input: 'hari. mama balannam.', expected: 'හරි. මම බලන්නම්.' },
    { id: 'Pos_Fun_12', type: 'pass', input: 'podi velaavak dhenna puluvandha?', expected: 'පොඩි වෙලාවක් දෙන්න පුලුවන්ද?' },
    { id: 'Pos_Fun_13', type: 'pass', input: 'bohoma sthuthi.', expected: 'බොහොම ස්තුති.' },
    { id: 'Pos_Fun_14', type: 'pass', input: 'karunaakarala mama samaga yamu.', expected: 'කරුනාකරල මම සමග යමු.' },
    { id: 'Pos_Fun_15', type: 'pass', input: 'eeyi, ooka karanna.', expected: 'ඒයි, ඕක කරන්න.' },
    { id: 'Pos_Fun_16', type: 'pass', input: 'api passe kamu.', expected: 'අපි පස්සෙ කමු.' },
    { id: 'Pos_Fun_17', type: 'pass', input: 'hemin hemin', expected: 'හෙමින් හෙමින්' },
    { id: 'Pos_Fun_18', type: 'pass', input: 'mama iiye aavaa.', expected: 'මම ඊයෙ ආවා.' },
    { id: 'Pos_Fun_19', type: 'pass', input: 'mama dhaen kama kanavaa.', expected: 'මම දැන් කම කනවා.' },
    { id: 'Pos_Fun_20', type: 'pass', input: 'mama heta gedhara yanavaa.', expected: 'මම හෙට ගෙදර යනවා.' },
    { id: 'Pos_Fun_21', type: 'pass', input: 'eyaa pansal giyaa ', expected: 'එයා පන්සල් ගියා' },
    { id: 'Pos_Fun_22', type: 'pass', input: 'api nidhaagamu. ', expected: 'අපි නිදාගමු.' },
    { id: 'Pos_Fun_23', type: 'pass', input: 'anee eeka karanna.', expected: 'අනේ ඒක කරන්න.' },
    { id: 'Pos_Fun_24', type: 'pass', input: 'YouTube', expected: 'YouTube' },
    { id: 'Pos_Fun_25', type: 'pass', input: 'mama Colombo yanavaa. ', expected: 'මම Colombo යනවා.' },
    { id: 'Pos_Fun_26', type: 'pass', input: 'api Negombo lagoon ekata yamu.', expected: 'අපි Negombo lagoon එකට යමු.' },
    { id: 'Pos_Fun_27', type: 'pass', input: ' Kandy trip eka nisaa hotel eka book karalaa, confirmation email eka inbox eke thiyenavadha kiyalaa check kalaa.', expected: 'Kandy trip එක නිසා hotel එක book කරලා, confirmation email එක inbox eke තියෙනවද කියලා check කලා.' },
    { id: 'Pos_Fun_28', type: 'pass', input: 'ATM', expected: 'ATM' },
    { id: 'Pos_Fun_29', type: 'pass', input: '!?()""', expected: '!?()""' },
    { id: 'Pos_Fun_30', type: 'pass', input: 'Rs. 2500', expected: 'Rs. 2500' },
    { id: 'Pos_Fun_31', type: 'pass', input: '8.55 AM', expected: '8.55 AM' },
    { id: 'Pos_Fun_32', type: 'pass', input: '25/12/2026 ', expected: '25/12/2026 ' },
    { id: 'Pos_Fun_33', type: 'pass', input: 'mg', expected: 'mg' },
    { id: 'Pos_Fun_34', type: 'pass', input: 'api       yamu      issarahata. ', expected: 'අපි       යමු      ඉස්සරහට.' },
    { id: 'Pos_Fun_35', type: 'pass', input: 'maru machan! patta!!!', expected: 'මරු මචන්! පට්ට!!!' },
    { id: 'Pos_Fun_36', type: 'pass', input: 'Email ekak evanna amaarunam WhatsApp message ekak dapan.', expected: 'Email එකක් එවන්න අමාරුනම් WhatsApp message එකක් දාපන්.' },

    { id: 'Neg_Fun_01', type: 'fail', input: 'mamagamatayanawaa', expected: 'මම ගමට යනවා' },
    { id: 'Neg_Fun_02', type: 'fail', input: 'matapankannaonee', expected: 'මට පාන් කන්න ඕනේ' },
    { id: 'Neg_Fun_03', type: 'fail', input: 'eeyi oka diyan', expected: 'ඒයි ඕක දියන්' },
    { id: 'Neg_Fun_04', type: 'fail', input: 'api skul yanwa', expected: 'අපි පාසල් යනවා' },
    { id: 'Neg_Fun_05', type: 'fail', input: 'harrri harrri', expected: 'හරි හරි' },
    { id: 'Neg_Fun_06', type: 'fail', input: 'oy kohmd?', expected: 'ඔයා කොහොමද?' },
    { id: 'Neg_Fun_07', type: 'fail', input: 'mama adreyi', expected: 'මම ආදරෙයි' },
    { id: 'Neg_Fun_08', type: 'fail', input: 'mage laptop eka wada karan nae', expected: 'mage laptop එක වැඩ කරන් නැ' },
    { id: 'Neg_Fun_09', type: 'fail', input: 'appatasiri, mata beheth bonna amathaka wuna kiyannakoo.', expected: 'අප්පටසිරි, මට බෙහෙත් බොන්න අමතක වුනා කියහන්කෝ.' },
    { id: 'Neg_Fun_10', type: 'fail', input: 'suba udasanak!', expected: 'සුබ උදෑසනක්!' },
    { id: 'Neg_Fun_11', type: 'fail', input: 'ubata pissuda?', expected: 'උබට පිස්සුද?' },
    { id: 'Neg_Fun_12', type: 'fail', input: 'badaginida oyata?', expected: 'බඩගිනිද ඔයාට?' },
    { id: 'Neg_Fun_13', type: 'fail', input: 'almariya as karanna onii.', expected: 'අල්මාරිය අස් කරන්න ඔනී.' },
    { id: 'Neg_Fun_14', type: 'fail', input: 'raatree kaalayee sidu vuu athi thibra vaayu tharangaya saha maha vaessa nisaa praadeshiya maarga keehipayak vasa damaa aethi athara, pravaahana gaman aNtharaya vee aethi bava police media prakashanayakata sDHahan kaLeeya. ehi samastha dhiga pramaaNaya kiloomiitar 150k pamaNa vana athara, drivers laata alternative routes bhaavithaa karanna upades diya aethi.', expected: 'රෑත්‍රි කාලයේදී සිදු වූ අති තිව්‍ර වායු තරංගය සහ මහ වැස්ස නිසා ප්‍රාදේශීය මාර්ග කිහිපයක් වසා දමා ඇති අතර, ප්‍රවාහන ගමන් අන්තරාය වී ඇති බව පොලිස් මාධ්‍ය ප්‍රකාශයකට සඳහන් කළේය. එහි සමස්ත දිග ප්‍රමාණය කිලෝමීටර් 150ක් පමණ වන අතර, රියදුරන්ට විකල්ප මාර්ග භාවිතා කරන්න උපදෙස් දී ඇත.' },

    

{ id: 'Neg_Fun_14', type: 'fail', input: 'mamagedaraenava', expected: 'මම ගෙදර එනවා' },

{ id: 'Neg_Fun_15', type: 'fail', input: 'oyata loku amarui da', expected: 'ඔයාට ලොකු අමාරුයිද?' },

{ id: 'Neg_Fun_16', type: 'fail', input: 'eka nam hari lassanai', expected: 'එක නම් හරි ලස්සනයි' },

{ id: 'Neg_Fun_17', type: 'fail', input: 'mama honda lamayek', expected: 'මම හොඳ ළමයෙක්' },

{ id: 'Neg_Fun_18', type: 'fail', input: 'mokakda me wenne', expected: 'මොකක්ද මේ වෙන්නේ?' },

{ id: 'Neg_Fun_19', type: 'fail', input: 'api ymu colombo', expected: 'අපි යමු කොළඹ' },

{ id: 'Neg_Fun_20', type: 'fail', input: 'teacher kawda', expected: 'ගුරුවරයා කවුද?' },

{ id: 'Neg_Fun_21', type: 'fail', input: 'oyata sathutuda 😊', expected: 'ඔයාට සතුටුද?' },

{ id: 'Neg_Fun_22', type: 'fail', input: 'meeka nam honda idea ekak', expected: 'මේක නම් හොඳ අදහසක්' },

{ id: 'Neg_Fun_23', type: 'fail', input: 'wifi wada na bn', expected: 'වයිෆයි වැඩ නැ බන්' },

{ id: 'Neg_Fun_24', type: 'fail', input: 'call ekak danna puluwanda', expected: 'කෝල් එකක් දාන්න පුළුවන්ද?' },

{ id: 'Neg_Fun_25', type: 'fail', input: 'mokdda karanne dn', expected: 'මොකක්ද දැන් කරන්නේ?' },

{ id: 'Neg_Fun_26', type: 'fail', input: 'mama exam eka pass una', expected: 'මම විභාගය පාස් උනා' },

{ id: 'Neg_Fun_27', type: 'fail', input: 'time eka hari madi', expected: 'වේලාව හරි මදි' },

{ id: 'Neg_Fun_28', type: 'fail', input: 'issella oyama kiyanna', expected: 'ඉස්සෙල්ලා ඔයාම කියන්න' }


];

test.describe('Singlish → Sinhala Transliteration Unified Suite', () => {
    test.beforeEach(async ({ page }) => {
        await page.goto('https://www.swifttranslator.com/');
    });

    for (const data of testData) {
        const icon = data.type === 'pass' ? '✅' : '❌';

        test(`${icon} ${data.id} | ${data.input}`, async ({ page }) => {
            const inputArea = page.locator('textarea[placeholder*="Singlish"]');
            const outputArea = page.locator('.card:has-text("Sinhala") .w-full.h-80');

            await inputArea.fill(data.input);
            await expect(outputArea).not.toBeEmpty({ timeout: 10000 });

            const actualValue = (await outputArea.innerText()).trim();
            console.log(`[${data.type.toUpperCase()}] ID: ${data.id} | Input: ${data.input} | Actual: ${actualValue}`);

            if (data.type === 'pass') {
                expect(actualValue).toBe(data.expected);
            } else {
                expect(actualValue).not.toBe(data.expected);
            }
        });
    }

    test('Pos_UI_0001 | Real-time feedback check', async ({ page }) => {
        const inputArea = page.locator('textarea[placeholder*="Singlish"]');
        const outputArea = page.locator('.card:has-text("Sinhala") .w-full.h-80');

        await inputArea.type('mama');
        await expect(outputArea).toContainText('මම');
    });
});
