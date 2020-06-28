var colors = d3.scaleOrdinal(d3.schemeCategory10);

var svg = d3.select("svg"),
    width = +svg.attr("width"),
    height = +svg.attr("height"),
    node,
    link;

svg.append('defs').append('marker')
    .attrs({'id':'arrowhead',
        'viewBox':'-0 -5 10 10',
        'refX':13,
        'refY':0,
        'orient':'auto',
        'markerWidth':13,
        'markerHeight':13,
        'xoverflow':'visible'})
    .append('svg:path')
    .attr('d', 'M 0,-5 L 10 ,0 L 0,5')
    .attr('fill', '#999')
    .style('stroke','none');

var simulation = d3.forceSimulation()
    .force("link", d3.forceLink().id(function (d) {return d.id;}).distance(300).strength(1))
    .force("charge", d3.forceManyBody())
    .force("center", d3.forceCenter(width / 2, height / 2));

var links = [
    {
        "source": 4,
        "target": 1,
        "type": "BAD_AGAINST",
        "since": 2010
    },
    {
        "source": 4,
        "target": 5,
        "type": "BAD_AGAINST",
        "reasons": [
            "Sniper is suspectible to being ganked by Bloodseeker, who can easily kill Sniper due to his lack of mobility and escape mechanisms.",
            "Even if Sniper builds mobility items, Bloodseeker can prevent and even punish Sniper from/for using them with  Rupture; Sniper is forced to stand still with Shadow Blade Shadow Blade, while Hurricane Pike Hurricane Pike and Blink Dagger Blink Dagger deals damage if he attempts to use them while Ruptured."
        ]
    },
    {
        "source": 4,
        "target": 2,
        "type": "BAD_AGAINST",
        "reasons": [
            "Pudge's Meat Hook allows him to bring Sniper in the middle of any fight, and the pure damage does well against his high armor and low health.",
            "Dismember can lock Sniper down, which makes him highly vulnerable and gives enough time for Pudge to kill him alone."
        ]
    },
    {
        "source": 4,
        "target": 6,
        "type": "BAD_AGAINST",
        "reasons": [
            "Nethertoxin breaks Sniper's passives.",
            "Viper Strike together with  Poison Attack can slow Sniper and tears through his low health and mobility."
        ]
    },
    {
        "source": 1,
        "target": 6,
        "type": "BAD_AGAINST",
        "reasons": [
            "Poison Attack and Viper Strike slows Axe significantly, and puts his Blink Dagger Blink Dagger on cooldown, preventing him from initiating.",
            "Bristleback, in combination with his strength gain, high health, common itemization for magic resistance and damage reduction from  Bristleback makes him a poor target for Pudge."
        ]
    },
    {
        "source": 2,
        "target": 10,
        "type": "BAD_AGAINST",
        "reasons": [
            "Pudge is particularly susceptible to Bristleback's  Viscous Nasal Goo and  Quill Spray due to his naturally low armor & poor agility gain.",
            "Quill Spray stacks can easily lower Dragon Knights armor quickly."
        ]
    },
    {
        "source": 2,
        "target": 11,
        "type": "BAD_AGAINST",
        "reasons": [
            "Abaddon can activate  Borrowed Time to dispel Dismember; breaking the disable and potentially allowing Abaddon to escape.",
            "Aphotic Shield can be cast on an ally to dispel the stun of Dismember, which can make kills difficult to secure, given that Dismember is Pudge's only reliable disable."
        ]
    },
    {
        "source": 3,
        "target": 10,
        "type": "BAD_AGAINST",
        "reasons": [
            "Viscous Nasal Goo slows down Dragon Knight and lowers armor, locking him down and making him more vulnerable.",
            "Nethertoxin can break Counter Helix."
        ]
    },
    {
        "source": 3,
        "target": 6,
        "type": "BAD_AGAINST",
        "reasons": [
            "In the early game, a Dragon Knight without Black King Bar is basically defenseless against Viper."
        ]
    },
    {
        "source": 6,
        "target": 8,
        "type": "BAD_AGAINST",
        "reasons": [
            "Windrun evades Poison Attack and counteracts the slow.",
            "Viper's low mobility makes him an easy Shackleshot target.",
            "Focus Fire grants Windranger significant physical damage output to quickly wear Viper down.",
            "Powershot is a strong harassment and zoning tool against Viper in lane."
        ]
    },
    {
        "source": 5,
        "target": 11,
        "type": "BAD_AGAINST",
        "reasons": [
            "Borrowed Time makes Abaddon nearly impossible to gank.",
            "Aphotic Shield and Mist Coil prevents Bloodseeker from gaining his Thirst bonuses."
        ]
    },
    {
        "source": 7,
        "target": 10,
        "type": "BAD_AGAINST",
        "reasons": [
            "Viscous Nasal Goo can hinder Crystal Maiden's already abysmal mobility, which allows Bristleback (or his teammates) to run her down and kill her.",
            "Bristleback frequently builds Blade Mail, which can quickly kill Crystal Maiden if her ultimate is used while he is under its effect.",
            "The passive part of Bristleback will trigger many, many times under the damage from Freezing Field, and as the stacks increase, the damage output from each successive cast (or proc) will eat away at Crystal Maiden's small HP pool."
        ]
    },
    {
        "source": 8,
        "target": 1,
        "type": "BAD_AGAINST",
        "reasons": [
            "Windrun does not provide protection against  Counter Helix and  Berserker's Call. Her fast attack speed with Focus Fire will also quickly trigger  Counter Helix multiple times."
        ]
    },
    {
        "source": 8,
        "target": 5,
        "type": "BAD_AGAINST",
        "reasons": [
            "Rupture turns Windranger's mobility against her."
        ]
    },
    {
        "source": 9,
        "target": 2,
        "type": "BAD_AGAINST",
        "reasons": [
            "Meat Hook's high range allows Pudge's team to drag Zeus in the middle of the fight and abuse his frailty.",
            "Flesh Heap's health and magic resistance bonus makes Pudge exceptionally resistant to Zeus' nukes. In later stages of the game, Zeus is usually unable to seriously damage Pudge at all. Even Static Field, which deals damage based on a percentage of the enemy's health, won't be doing much.",
            "Even if Zeus buys a Black King Bar icon.png Black King Bar,  Meat Hook and  Dismember still disable him for a long time, usually causing Zeus' quick death.",
            "Zeus is vulnerable to early ganks, whom Pudge excels at."
        ]
    },
    {
        "source": 9,
        "target": 6,
        "type": "BAD_AGAINST",
        "reasons": [
            "Corrosive Skin counters Zeus in lane by canceling the effects of Clarity icon.png Clarity as Zeus relies on Arc Lightning to farm and secure last hits.",
            "Corrosive Skin also increases Viper's magic resistance to shrug off Zeus's magical nukes.",
            "Nethertoxin breaks Static Field.",
            "Due to Zeus' poor mobility,  Viper Strike will cripple Zeus and will allow Viper and his teammates to land a lot of attacks."
        ]
    },
    {
        "source": 10,
        "target": 6,
        "type": "BAD_AGAINST",
        "reasons": [
            "Nethertoxin disables Bristleback's passive.",
            "Viper Strike and Poison Attack slow down Bristleback's movement speed so he's unable to get out from Nethertoxin."
        ]
    },
    {
        "source": 11,
        "target": 6,
        "type": "BAD_AGAINST",
        "reasons": [
            "Nethertoxin's disables passives including Curse of Avernus, but more importantly, Borrowed Time."
        ]
    }
];

var nodes = [
    {
        "name": "Axe",
        "label": "Strength",
        "id": 1,
        "image": "heroesIcons/240px-Axe_icon.png"
    },
    {
        "name": "Pudge",
        "label": "Strength",
        "id": 2,
        "image": "heroesIcons/240px-Pudge_icon.png"
    },
    {
        "name": "Dragon Knight",
        "label": "Strength",
        "id": 3,
        "image": "heroesIcons/240px-Dragon_Knight_icon.png"
    },
    {
        "name": "Sniper",
        "label": "Agility",
        "id": 4,
        "image": "heroesIcons/240px-Sniper_icon.png"
    },
    {
        "name": "Bloodseeker",
        "label": "Agility",
        "id": 5,
        "image": "heroesIcons/240px-Bloodseeker_icon.png"
    },
    {
        "name": "Viper",
        "label": "Agility",
        "id": 6,
        "image": "heroesIcons/240px-Viper_icon.png"
    },
    {
        "name": "Crystal Maiden",
        "label": "Intelligence",
        "id": 7,
        "image": "heroesIcons/240px-Crystal_Maiden_icon.png"
    },
    {
        "name": "Wind Ranger",
        "label": "Intelligence",
        "id": 8,
        "image": "heroesIcons/240px-Windranger_icon.png"
    },
    {
        "name": "Zeus",
        "label": "Intelligence",
        "id": 9,
        "image": "heroesIcons/240px-Zeus_icon.png"
    },
    {
        "name": "Bristleback",
        "label": "Strength",
        "id": 10,
        "image": "heroesIcons/240px-Bristleback_icon.png"
    },
    {
        "name": "Abaddon",
        "label": "Strength",
        "id": 11,
        "image": "heroesIcons/240px-Abaddon_icon.png"
    }
];

update(links, nodes);



function update(links, nodes) {
    link = svg.selectAll(".link")
        .data(links)
        .enter()
        .append("line")
        .attr("class", "link")
        .attr('marker-end','url(#arrowhead)')

    link.append("title")
        .text(function (d) {return d.type;});

    edgepaths = svg.selectAll(".edgepath")
        .data(links)
        .enter()
        .append('path')
        .attrs({
            'class': 'edgepath',
            'fill-opacity': 0,
            'stroke-opacity': 0,
            'id': function (d, i) {return 'edgepath' + i}
        })
        .style("pointer-events", "none");

    edgelabels = svg.selectAll(".edgelabel")
        .data(links)
        .enter()
        .append('text')
        .style("pointer-events", "none")
        .attrs({
            'class': 'edgelabel',
            'id': function (d, i) {return 'edgelabel' + i},
            'font-size': 10,
            'fill': '#aaa'
        });

    edgelabels.append('textPath')
        .attr('xlink:href', function (d, i) {return '#edgepath' + i})
        .style("text-anchor", "middle")
        .style("pointer-events", "none")
        .attr("startOffset", "50%")
        .text(function (d) {return d.type});

    node = svg.selectAll(".node")
        .data(nodes)
        .enter()
        .append("g")
        .attr("class", "node")
        .attr("id", function (d) {return d.id; })
        .call(d3.drag()
                .on("start", dragstarted)
                .on("drag", dragged)
            //.on("end", dragended)
        );

    var images = node.append("svg:image")
        .attr("xlink:href",  function(d) { return d.image;})
        .attr("x", function(d) { return -40;})
        .attr("y", function(d) { return -40;})
        .attr("height", 50)
        .attr("width", 50);

    node.append("title")
        .text(function (d) {return d.id;});

    node.append("text")
        .attr("dy", -3)
        .text(function (d) {return d.name+":"+d.label;})
        .style("font", "10px sans-serif")
        .style("stroke", "grey");

    simulation
        .nodes(nodes)
        .on("tick", ticked);

    simulation.force("link")
        .links(links);
}

function ticked() {
    link
        .attr("x1", function (d) {return d.source.x;})
        .attr("y1", function (d) {return d.source.y;})
        .attr("x2", function (d) {return d.target.x;})
        .attr("y2", function (d) {return d.target.y;});

    node
        .attr("transform", function (d) {return "translate(" + d.x + ", " + d.y + ")";});

    edgepaths.attr('d', function (d) {
        return 'M ' + d.source.x + ' ' + d.source.y + ' L ' + d.target.x + ' ' + d.target.y;
    });

    edgelabels.attr('transform', function (d) {
        if (d.target.x < d.source.x) {
            var bbox = this.getBBox();

            rx = bbox.x + bbox.width / 2;
            ry = bbox.y + bbox.height / 2;
            return 'rotate(180 ' + rx + ' ' + ry + ')';
        }
        else {
            return 'rotate(0)';
        }
    });
}

function dragstarted(d) {
    if (!d3.event.active) simulation.alphaTarget(0.3).restart()
    d.fx = d.x;
    d.fy = d.y;
}

function dragged(d) {
    d.fx = d3.event.x;
    d.fy = d3.event.y;
}

//    function dragended(d) {
//        if (!d3.event.active) simulation.alphaTarget(0);
//        d.fx = undefined;
//        d.fy = undefined;
//    }
var lastFocus = -1;
const buttons = d3.selectAll('input');
buttons.on('change', function(d) {
    console.log('button changed to ' + this.value);
    svg.selectAll(".node").filter((d, i) => ((i + 1) == this.value)).select("text").transition()
        .duration(750)
        .attr("x", 22)
        .style("fill", "steelblue")
        .style("stroke", "lightsteelblue")
        .style("stroke-width", ".5px")
        .style("font", "20px sans-serif");
    svg.selectAll(".node").filter((d, i) => ((i + 1) == this.value)).select("circle").transition()
        .duration(750)
        .attr("r", 16)
        .style("fill", "lightsteelblue");

    lastFocus = this.value;

});