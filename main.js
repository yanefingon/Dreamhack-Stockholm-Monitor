
// account details
const players = [
    ['Foggy', ['SPXFoggy%232799']],
    ['KraV', ['KraV%2321403', 'OzZy%2322198']],
    ['FoCuS', ['FoCuS%2331324']],
    ['ReMinD', ['ReMinD%2331748', 'raimdark%233864']],
    ['Hitman', ['Ludique%2311619']],
    ['Lucifer', ['VSLuChaeL%233146', 'VSMichaeL%233369']],
    ['XlorD', ['XlorD%232596', 'AlfonsoCoco%232384']],
    ['Chaemiko', ['ZizonHuman%233182']],
    ['Moon', ['Interview%2331295', 'Moon%2335134']],
    ['INSUPERABLE', ['iNSUPERABLE%2311842']],
    ['HawK', ['HawK%232797']],
    ['LawLiet', ['LawLiet%233990', 'Lawliet%2321164', '솜크리%233954', '장상9%233849']],
    ['Happy', ['Cacxa26%232948', 'Happy%232384', 'cacxa27%232425']],
    ['Sok', ['AFSoK%233881', 'moosangsung%231804']],
    ['CrunCher', ['CrunCher%231245']],
    ['Soin', ['전소인%233190']]
];

async function update([name, aliases]) {
    let flag;
    for (const alias of aliases) {
        const url = new URL('https://website-backend.w3champions.com/api/personal-settings/' + alias);
        const response = await fetch(url);
        const result = await response.json();
        if (flag != 'SE') 
            flag = result.location;
    }
    
    const entry = document.body.appendChild(document.createElement('div'));
    entry.className = 'player';
    entry.innerHTML = name + ': ';

    const flag_placeholder = new CountryFlag(entry);

    flag_placeholder.selectByAlpha2(flag); 
}

for (const player of players) update(player);
