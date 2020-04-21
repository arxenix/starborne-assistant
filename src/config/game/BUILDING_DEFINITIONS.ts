//Starborne\starborne-live\Starborne_Data\TempServerData\Release_98
//https://starbornemedia.blob.core.windows.net/servers/Release_98/LOCALIZATION_MISSIONS_OFFENSE.json

export default {
	"RootBuildingIndex": 0, // Index of the root node, i.e. the Command Center
	"DowngradeReturnModifier": 0.5, // Ratio of resources returned when downgrading buildings

	"BuildingSlotTypes": [
		{
			"SlotType": "Housing",
			"TypeAffinity": [ "Housing" ]
		},
		{
			"SlotType": "Production",
			"TypeAffinity": [ "MetalProduction", "GasProduction", "CrystalProduction", "Production" ]
		},
		{
			"SlotType": "Specialization",
			"TypeAffinity": [ "Military", "Domain", "Industry", "General" ]
		},
		{
			"SlotType": "Organization",
			"TypeAffinity": [ "Organization" ]
		},
		{
			"SlotType": "Empire",
			"TypeAffinity": [ "EmpireUnique" ]
		},
		{
			"SlotType": "MetalProduction",
			"TypeAffinity": [ "MetalProduction" ]
		},
		{
			"SlotType": "GasProduction",
			"TypeAffinity": [ "GasProduction" ]
		},
		{
			"SlotType": "CrystalProduction",
			"TypeAffinity": [ "CrystalProduction" ]
		},
		{
			"SlotType": "Outpost",
			"TypeAffinity": [ "Outpost" ]
		},
		{
			"SlotType": "CapitalHousing",
			"TypeAffinity": [ "CapitalHousing" ]
		}
	],

	"BuildingSlots": [
		// Housing
		{
			"Id": 1,
			"Tier": 0,
			"SlotType": "Housing",
			"StationType": "Normal"
		},
		// Production
		{
			"Id": 2,
			"Tier": 0,
			"SlotType": "MetalProduction",
			"StationType": "Normal",
			"AllowAllBuildingTiers": true
		},
		{
			"Id": 3,
			"Tier": 0,
			"SlotType": "GasProduction",
			"StationType": "Normal",
			"AllowAllBuildingTiers": true
		},
		{
			"Id": 4,
			"Tier": 0,
			"SlotType": "CrystalProduction",
			"StationType": "Normal",
			"AllowAllBuildingTiers": true
		},
		// Unique
		{
			"Id": 6,
			"Tier": 0,
			"SlotType": "Empire",
			"StationType": "Normal",
			"AllowAllBuildingTiers": true
		},
		// Organization
		{
			"Id": 7,
			"Tier": 0,
			"SlotType": "Organization",
			"StationType": "Normal"
		},
		{
			"Id": 8,
			"Tier": 1,
			"SlotType": "Organization",
			"StationType": "Normal"
		},
		{
			"Id": 9,
			"Tier": 2,
			"SlotType": "Organization",
			"StationType": "Normal"
		},
		{
			"Id": 10,
			"Tier": 3,
			"SlotType": "Organization",
			"StationType": "Normal"
		},
		// Specialization
		{
			"Id": 12,
			"Tier": 0,
			"SlotType": "Specialization",
			"StationType": "Normal"
		},
		{
			"Id": 13,
			"Tier": 0,
			"SlotType": "Specialization",
			"StationType": "Normal"
		},
		{
			"Id": 14,
			"Tier": 0,
			"SlotType": "Specialization",
			"StationType": "Normal"
		},
		{
			"Id": 15,
			"Tier": 0,
			"SlotType": "Specialization",
			"StationType": "Normal"
		},
		{
			"Id": 16,
			"Tier": 1,
			"SlotType": "Specialization",
			"StationType": "Normal"
		},
		{
			"Id": 17,
			"Tier": 1,
			"SlotType": "Specialization",
			"StationType": "Normal"
		},
		{
			"Id": 18,
			"Tier": 1,
			"SlotType": "Specialization",
			"StationType": "Normal"
		},
		{
			"Id": 19,
			"Tier": 2,
			"SlotType": "Specialization",
			"StationType": "Normal"
		},
		{
			"Id": 20,
			"Tier": 2,
			"SlotType": "Specialization",
			"StationType": "Normal"
		},
		{
			"Id": 21,
			"Tier": 2,
			"SlotType": "Specialization",
			"StationType": "Normal"
		},
		{
			"Id": 22,
			"Tier": 3,
			"SlotType": "Specialization",
			"StationType": "Normal"
		},
		{
			"Id": 23,
			"Tier": 3,
			"SlotType": "Specialization",
			"StationType": "Normal"
		},
		{
			"Id": 24,
			"Tier": 3,
			"SlotType": "Specialization",
			"StationType": "Normal"
		},
		// AllianceStation 7 slots,
		{
			"Id": 25,
			"Tier": 0,
			"SlotType": "Specialization",
			"StationType": "AllianceStation"
		},
		{
			"Id": 26,
			"Tier": 0,
			"SlotType": "Specialization",
			"StationType": "AllianceStation"
		},
		{
			"Id": 27,
			"Tier": 0,
			"SlotType": "Specialization",
			"StationType": "AllianceStation"
		},
		{
			"Id": 28,
			"Tier": 0,
			"SlotType": "Specialization",
			"StationType": "AllianceStation"
		},
		{
			"Id": 29,
			"Tier": 0,
			"SlotType": "Specialization",
			"StationType": "AllianceStation"
		},
		{
			"Id": 30,
			"Tier": 0,
			"SlotType": "Specialization",
			"StationType": "AllianceStation"
		},
		{
			"Id": 31,
			"Tier": 0,
			"SlotType": "Specialization",
			"StationType": "AllianceStation"
		},
		// FOB 5 slots
		{
			"Id": 34,
			"Tier": 0,
			"SlotType": "Specialization",
			"StationType": "ForwardBase"
		},
		{
			"Id": 35,
			"Tier": 0,
			"SlotType": "Specialization",
			"StationType": "ForwardBase"
		},
		{
			"Id": 36,
			"Tier": 0,
			"SlotType": "Specialization",
			"StationType": "ForwardBase"
		},
		{
			"Id": 37,
			"Tier": 0,
			"SlotType": "Specialization",
			"StationType": "ForwardBase"
		},
		{
			"Id": 38,
			"Tier": 0,
			"SlotType": "Specialization",
			"StationType": "ForwardBase"
		},
		// SuperStructure 5 slots
		{
			"Id": 39,
			"Tier": 0,
			"SlotType": "Specialization",
			"StationType": "SuperStructure"
		},
		{
			"Id": 40,
			"Tier": 0,
			"SlotType": "Specialization",
			"StationType": "SuperStructure"
		},
		{
			"Id": 41,
			"Tier": 0,
			"SlotType": "Specialization",
			"StationType": "SuperStructure"
		},
		{
			"Id": 42,
			"Tier": 0,
			"SlotType": "Specialization",
			"StationType": "SuperStructure"
		},
		// CAPITAL HOUSING
		{
			"Id": 44,
			"Tier": 0,
			"SlotType": "CapitalHousing",
			"StationType": "Normal",
			"CapitalOnly": true
		}

	],

	"SpecialBuildingSlots": [
		{ // Special Production Slot
			"Id": 5,
			"SlotType": "Production",
			"StationType": "Normal",
			"AllowAllBuildingTiers": true,
			"SlotRequirements": {
				"0": {
					"Condition": "Any",
					"Requirements": [
						{
							"$type": "BuildingRequirement",
							"Id": 310,
							"Level": 1
						}
					]
				}
			}
		},
		{ // Special Organization
			"Id": 11,
			"SlotType": "Organization",
			"StationType": "Normal",
			"SlotRequirements": {
				"0": {
					"Condition": "Any",
					"Requirements": [
						{
							"$type": "BuildingRequirement",
							"Id": 53,
							"Level": 1
						}
					]
				},
				"1": {
					"Condition": "Any",
					"Requirements": [
						{
							"$type": "BuildingRequirement",
							"Id": 54,
							"Level": 1
						}
					]
				},
				"2": {
					"Condition": "Any",
					"Requirements": [
						{
							"$type": "BuildingRequirement",
							"Id": 55,
							"Level": 1
						}
					]
				},
				"3": {
					"Condition": "Any",
					"Requirements": [
						{
							"$type": "BuildingRequirement",
							"Id": 56,
							"Level": 1
						}
					]
				}
			}
		}
	],

	"BuildingTypes": [
		{
			"Id": 1,
			"Name": "Living Quarters",
			"Description": "Increases the base labor available on this station.",
			"FullDescription": "Increases the base labor available on this station.",
			"FlavourText": "Before Habitation Domes invaded the housing market, budding colonialists often made back a good portion of their wage cost via rent.",
			"ImageID": 35,
			"Role": "Housing",
			"TierAffinity": [ 0 ],
			"Multiplicity": "Unrestricted",
			"SlotAffinity": "Housing",
			"StationType": "Normal",
			"LevelCap": 10,
			"Stats": [
				{
					"TargetAttribute": "COST_TIME",
					"UseArray": true,
					"ModifierArray": [ 3, 7.5, 15.75, 25.5, 39, 60, 88.88, 127.5, 168.75, 214.13 ]
				},
				{
					"TargetAttribute": "COST_MTL",
					"UseArray": true,
					"ModifierArray": [ 34.965, 87.4125, 183.56625, 297.2025, 454.545, 699.3, 1035.838125, 1486.0125, 1966.78125, 2495.626875 ]
				},
				{
					"TargetAttribute": "COST_GAS",
					"UseArray": true,
					"ModifierArray": [ 34.965, 87.4125, 183.56625, 297.2025, 454.545, 699.3, 1035.838125, 1486.0125, 1966.78125, 2495.626875 ]
				},
				{
					"TargetAttribute": "COST_CRS",
					"UseArray": true,
					"ModifierArray": [ 34.965, 87.4125, 183.56625, 297.2025, 454.545, 699.3, 1035.838125, 1486.0125, 1966.78125, 2495.626875 ]
				},
				{
					"TargetAttribute": "STAT_B_HP",
					"UseArray": true,
					"ModifierArray": [ 150, 525, 1312.5, 2587.5, 4537.5, 7537.5, 11981.25, 18356.25, 26793.75, 37500 ]
				},
				{
					"TargetAttribute": "STAT_PROD_SPG",
					"UseArray": true,
					"ModifierArray": [ 0.07, 0.23, 0.57, 1.12, 1.97, 3.27, 5.19, 7.95, 11.61, 16.25 ]
				}
			],
			"Effects": [
				{
					"Origin": "Building",
					"Destination": "Station",
					"Target": "Station",
					"TargetAttribute": "STAT_PROD_ENERGY",
					"Type": "Modifier",
					"UseArray": true,
					"ModifierArray": [ 12, 36.8, 75.2, 128, 196, 280, 380.8, 500, 639.2, 800 ]
				}
			]
		},
		{
			"Id": 2,
			"Name": "Metal Refinery",
			"Description": "Increases the base metal production per hour on this station.",
			"FullDescription": "Increases the base metal production per hour on this station.",
			"FlavourText": "Clink! Bam! Boom!",
			"ImageID": 32,
			"Role": "MetalProduction",
			"TierAffinity": [ 0 ],
			"Multiplicity": "Unrestricted",
			"SlotAffinity": "MetalProduction",
			"StationType": "Normal",
			"LevelCap": 10,
			"Stats": [
				{
					"TargetAttribute": "COST_TIME",
					"UseArray": true,
					"ModifierArray": [ 3, 7.5, 15.75, 25.5, 39, 60, 88.88, 127.5, 168.75, 214.13 ]
				},
				{
					"TargetAttribute": "COST_MTL",
					"UseArray": true,
					"ModifierArray": [ 21, 52.5, 110.25, 178.5, 273, 420, 622.125, 892.5, 1181.25, 1498.875 ]
				},
				{
					"TargetAttribute": "COST_GAS",
					"UseArray": true,
					"ModifierArray": [ 31.5, 78.75, 165.375, 267.75, 409.5, 630, 933.1875, 1338.75, 1771.875, 2248.3125 ]
				},
				{
					"TargetAttribute": "COST_CRS",
					"UseArray": true,
					"ModifierArray": [ 52.5, 131.25, 275.625, 446.25, 682.5, 1050, 1555.3125, 2231.25, 2953.125, 3747.1875 ]
				},
				{
					"TargetAttribute": "STAT_B_HP",
					"UseArray": true,
					"ModifierArray": [ 84.38, 281.25, 675, 1293.75, 2137.5, 3234.38, 4612.5, 6300, 8437.5, 11250 ]
				},
				{
					"TargetAttribute": "STAT_PROD_SPG",
					"UseArray": true,
					"ModifierArray": [ 0.07, 0.23, 0.57, 1.12, 1.97, 3.27, 5.19, 7.95, 11.61, 16.25 ]
				}
			],
			"Effects": [
				{
					"Origin": "Building",
					"Destination": "Station",
					"Target": "Station",
					"TargetAttribute": "STAT_PROD_MTL",
					"Type": "Modifier",
					"UseArray": true,
					"ModifierArray": [ 7.5, 23, 47, 80, 122.5, 175, 238, 312.5, 399.5, 500 ]
				}
			]
		},
		{
			"Id": 3,
			"Name": "Gas Refinery",
			"Description": "Increases the base gas production per hour on this station.",
			"FullDescription": "Increases the base gas production per hour on this station.",
			"FlavourText": "To ease the process, refineries often liquify the gas for further refinement.",
			"ImageID": 38,
			"Role": "GasProduction",
			"TierAffinity": [ 0 ],
			"Multiplicity": "Unrestricted",
			"SlotAffinity": "GasProduction",
			"StationType": "Normal",
			"LevelCap": 10,
			"Stats": [
				{
					"TargetAttribute": "COST_TIME",
					"UseArray": true,
					"ModifierArray": [ 3, 7.5, 15.75, 25.5, 39, 60, 88.88, 127.5, 168.75, 214.13 ]
				},
				{
					"TargetAttribute": "COST_MTL",
					"UseArray": true,
					"ModifierArray": [ 52.5, 131.25, 275.625, 446.25, 682.5, 1050, 1555.3125, 2231.25, 2953.125, 3747.1875 ]
				},
				{
					"TargetAttribute": "COST_GAS",
					"UseArray": true,
					"ModifierArray": [ 21, 52.5, 110.25, 178.5, 273, 420, 622.125, 892.5, 1181.25, 1498.875 ]
				},
				{
					"TargetAttribute": "COST_CRS",
					"UseArray": true,
					"ModifierArray": [ 31.5, 78.75, 165.375, 267.75, 409.5, 630, 933.1875, 1338.75, 1771.875, 2248.3125 ]
				},
				{
					"TargetAttribute": "STAT_B_HP",
					"UseArray": true,
					"ModifierArray": [ 84.38, 281.25, 675, 1293.75, 2137.5, 3234.38, 4612.5, 6300, 8437.5, 11250 ]
				},
				{
					"TargetAttribute": "STAT_PROD_SPG",
					"UseArray": true,
					"ModifierArray": [ 0.07, 0.23, 0.57, 1.12, 1.97, 3.27, 5.19, 7.95, 11.61, 16.25 ]
				}
			],
			"Effects": [
				{
					"Origin": "Building",
					"Destination": "Station",
					"Target": "Station",
					"TargetAttribute": "STAT_PROD_GAS",
					"Type": "Modifier",
					"UseArray": true,
					"ModifierArray": [ 7.5, 23, 47, 80, 122.5, 175, 238, 312.5, 399.5, 500 ]
				}
			]
		},
		{
			"Id": 4,
			"Name": "Crystal Refinery",
			"Description": "Increases the base crystal production per hour on this station.",
			"FullDescription": "Increases the base crystal production per hour on this station.",
			"FlavourText": "An important component for semiconductors, crystals are the basis for much of the technology of the current age.",
			"ImageID": 37,
			"Role": "CrystalProduction",
			"TierAffinity": [ 0 ],
			"Multiplicity": "Unrestricted",
			"SlotAffinity": "CrystalProduction",
			"StationType": "Normal",
			"LevelCap": 10,
			"Stats": [
				{
					"TargetAttribute": "COST_TIME",
					"UseArray": true,
					"ModifierArray": [ 3, 7.5, 15.75, 25.5, 39, 60, 88.88, 127.5, 168.75, 214.13 ]
				},
				{
					"TargetAttribute": "COST_MTL",
					"UseArray": true,
					"ModifierArray": [ 31.5, 78.75, 165.375, 267.75, 409.5, 630, 933.1875, 1338.75, 1771.875, 2248.3125 ]
				},
				{
					"TargetAttribute": "COST_GAS",
					"UseArray": true,
					"ModifierArray": [ 52.5, 131.25, 275.625, 446.25, 682.5, 1050, 1555.3125, 2231.25, 2953.125, 3747.1875 ]
				},
				{
					"TargetAttribute": "COST_CRS",
					"UseArray": true,
					"ModifierArray": [ 21, 52.5, 110.25, 178.5, 273, 420, 622.125, 892.5, 1181.25, 1498.875 ]
				},
				{
					"TargetAttribute": "STAT_B_HP",
					"UseArray": true,
					"ModifierArray": [ 84.38, 281.25, 675, 1293.75, 2137.5, 3234.38, 4612.5, 6300, 8437.5, 11250 ]
				},
				{
					"TargetAttribute": "STAT_PROD_SPG",
					"UseArray": true,
					"ModifierArray": [ 0.07, 0.23, 0.57, 1.12, 1.97, 3.27, 5.19, 7.95, 11.61, 16.25 ]
				}
			],
			"Effects": [
				{
					"Origin": "Building",
					"Destination": "Station",
					"Target": "Station",
					"TargetAttribute": "STAT_PROD_CRS",
					"Type": "Modifier",
					"UseArray": true,
					"ModifierArray": [ 7.5, 23, 47, 80, 122.5, 175, 238, 312.5, 399.5, 500 ]
				}
			]
		},
		{
			"Id": 50,
			"Name": "The Workshed",
			"Description": "Unlocks an extra outpost slot that fits a tier 1 outpost.",
			"FullDescription": "Unlocks an extra outpost slot that fits a tier 1 outpost.",
			"FlavourText": "A quaint building but very much worth it.",
			"ImageID": 13,
			"Role": "EmpireUnique",
			"TierAffinity": [ 0 ],
			"Multiplicity": "EmpireUnique",
			"SlotAffinity": "Empire",
			"StationType": "Normal",
			"LevelCap": 1,
			"Stats": [
				{
					"TargetAttribute": "COST_TIME",
					"UseArray": true,
					"ModifierArray": [ 420.00000000000006 ]
				},
				{
					"TargetAttribute": "COST_MTL",
					"UseArray": true,
					"ModifierArray": [ 15297.187500000004 ]
				},
				{
					"TargetAttribute": "COST_GAS",
					"UseArray": true,
					"ModifierArray": [ 15297.187500000004 ]
				},
				{
					"TargetAttribute": "COST_CRS",
					"UseArray": true,
					"ModifierArray": [ 15297.187500000004 ]
				},
				{
					"TargetAttribute": "STAT_B_HP",
					"UseArray": true,
					"ModifierArray": [ 13125.000000000002 ]
				},
				{
					"TargetAttribute": "STAT_PROD_SPG",
					"UseArray": true,
					"ModifierArray": [ 21.000000000000004 ]
				}
			]
		},
		{
			"Id": 51,
			"Name": "Bespoke Outbuildings",
			"Description": "Unlocks an extra outpost slot that fits a tier 2 outpost.",
			"FullDescription": "Unlocks an extra outpost slot that fits a tier 2 outpost.",
			"FlavourText": "Your dream station, our pleasure.",
			"Role": "EmpireUnique",
			"TierAffinity": [ 1 ],
			"Multiplicity": "EmpireUnique",
			"SlotAffinity": "Empire",
			"StationType": "Normal",
			"LevelCap": 1,
			"Stats": [
				{
					"TargetAttribute": "COST_TIME",
					"UseArray": true,
					"ModifierArray": [ 1230 ]
				},
				{
					"TargetAttribute": "COST_MTL",
					"UseArray": true,
					"ModifierArray": [ 44798.90625 ]
				},
				{
					"TargetAttribute": "COST_GAS",
					"UseArray": true,
					"ModifierArray": [ 44798.90625 ]
				},
				{
					"TargetAttribute": "COST_CRS",
					"UseArray": true,
					"ModifierArray": [ 44798.90625 ]
				},
				{
					"TargetAttribute": "STAT_B_HP",
					"UseArray": true,
					"ModifierArray": [ 38437.5 ]
				},
				{
					"TargetAttribute": "STAT_PROD_SPG",
					"UseArray": true,
					"ModifierArray": [ 61.49999999999999 ]
				}
			]
		},
		{
			"Id": 52,
			"Name": "Arbeiter Plaza",
			"Description": "Unlocks an extra outpost slot that fits a tier 3 outpost.",
			"FullDescription": "Unlocks an extra outpost slot that fits a tier 3 outpost.",
			"FlavourText": "Designed and built by the famous Terran architect, Scius Falkenhaupt, the Arbeiter Plaza is a garden in space, a reprieve from the metallic environment of space stations.",
			"ImageID": 4,
			"Role": "EmpireUnique",
			"TierAffinity": [ 2 ],
			"Multiplicity": "EmpireUnique",
			"SlotAffinity": "Empire",
			"StationType": "Normal",
			"LevelCap": 1,
			"Stats": [
				{
					"TargetAttribute": "COST_TIME",
					"UseArray": true,
					"ModifierArray": [ 1860 ]
				},
				{
					"TargetAttribute": "COST_MTL",
					"UseArray": true,
					"ModifierArray": [ 67744.6875 ]
				},
				{
					"TargetAttribute": "COST_GAS",
					"UseArray": true,
					"ModifierArray": [ 67744.6875 ]
				},
				{
					"TargetAttribute": "COST_CRS",
					"UseArray": true,
					"ModifierArray": [ 67744.6875 ]
				},
				{
					"TargetAttribute": "STAT_B_HP",
					"UseArray": true,
					"ModifierArray": [ 58125 ]
				},
				{
					"TargetAttribute": "STAT_PROD_SPG",
					"UseArray": true,
					"ModifierArray": [ 93 ]
				}
			]
		},
		{
			"Id": 53,
			"Name": "State Notaries",
			"Description": "Unlocks an extra organization slot that fits a tier 1 organization.",
			"FullDescription": "Unlocks an extra organization slot that fits a tier 1 organization.",
			"FlavourText": "An organization devoted to facilitating more organizations. Very Atlas.",
			"Role": "EmpireUnique",
			"TierAffinity": [ 0 ],
			"Multiplicity": "EmpireUnique",
			"SlotAffinity": "Empire",
			"StationType": "Normal",
			"LevelCap": 1,
			"Stats": [
				{
					"TargetAttribute": "COST_TIME",
					"UseArray": true,
					"ModifierArray": [ 420.00000000000006 ]
				},
				{
					"TargetAttribute": "COST_MTL",
					"UseArray": true,
					"ModifierArray": [ 15297.187500000004 ]
				},
				{
					"TargetAttribute": "COST_GAS",
					"UseArray": true,
					"ModifierArray": [ 15297.187500000004 ]
				},
				{
					"TargetAttribute": "COST_CRS",
					"UseArray": true,
					"ModifierArray": [ 15297.187500000004 ]
				},
				{
					"TargetAttribute": "STAT_B_HP",
					"UseArray": true,
					"ModifierArray": [ 13125.000000000002 ]
				},
				{
					"TargetAttribute": "STAT_PROD_SPG",
					"UseArray": true,
					"ModifierArray": [ 21.000000000000004 ]
				}
			]
		},
		{
			"Id": 54,
			"Name": "Filmaunt University",
			"Description": "Unlocks an extra organization slot that fits a tier 2 organization.",
			"FullDescription": "Unlocks an extra organization slot that fits a tier 2 organization.",
			"FlavourText": "One of the most prestigious universities in human history. A Filmaunt graduate is virtually guaranteed a successful career.",
			"ImageID": 20,
			"Role": "EmpireUnique",
			"TierAffinity": [ 1 ],
			"Multiplicity": "EmpireUnique",
			"SlotAffinity": "Empire",
			"StationType": "Normal",
			"LevelCap": 1,
			"Stats": [
				{
					"TargetAttribute": "COST_TIME",
					"UseArray": true,
					"ModifierArray": [ 1230 ]
				},
				{
					"TargetAttribute": "COST_MTL",
					"UseArray": true,
					"ModifierArray": [ 44798.90625 ]
				},
				{
					"TargetAttribute": "COST_GAS",
					"UseArray": true,
					"ModifierArray": [ 44798.90625 ]
				},
				{
					"TargetAttribute": "COST_CRS",
					"UseArray": true,
					"ModifierArray": [ 44798.90625 ]
				},
				{
					"TargetAttribute": "STAT_B_HP",
					"UseArray": true,
					"ModifierArray": [ 38437.5 ]
				},
				{
					"TargetAttribute": "STAT_PROD_SPG",
					"UseArray": true,
					"ModifierArray": [ 61.49999999999999 ]
				}
			]
		},
		{
			"Id": 55,
			"Name": "Galactico Trade Center",
			"Description": "Unlocks an extra organization slot that fits a tier 3 organization.",
			"FullDescription": "Unlocks an extra organization slot that fits a tier 3 organization.",
			"FlavourText": "A towering achievement of engineering, home to the Galaxy Fair, the modern age's version of a 20th. century Terran event called The World Fair.",
			"ImageID": 21,
			"Role": "EmpireUnique",
			"TierAffinity": [ 2 ],
			"Multiplicity": "EmpireUnique",
			"SlotAffinity": "Empire",
			"StationType": "Normal",
			"LevelCap": 1,
			"Stats": [
				{
					"TargetAttribute": "COST_TIME",
					"UseArray": true,
					"ModifierArray": [ 1860 ]
				},
				{
					"TargetAttribute": "COST_MTL",
					"UseArray": true,
					"ModifierArray": [ 67744.6875 ]
				},
				{
					"TargetAttribute": "COST_GAS",
					"UseArray": true,
					"ModifierArray": [ 67744.6875 ]
				},
				{
					"TargetAttribute": "COST_CRS",
					"UseArray": true,
					"ModifierArray": [ 67744.6875 ]
				},
				{
					"TargetAttribute": "STAT_B_HP",
					"UseArray": true,
					"ModifierArray": [ 58125 ]
				},
				{
					"TargetAttribute": "STAT_PROD_SPG",
					"UseArray": true,
					"ModifierArray": [ 93 ]
				}
			]
		},
		{
			"Id": 56,
			"Name": "Empyric Courts",
			"Description": "Unlocks an extra organization slot that fits a tier 4 organization.",
			"FullDescription": "Unlocks an extra organization slot that fits a tier 4 organization.",
			"FlavourText": "Here, the laws of the entire empire are finalized.",
			"ImageID": 10,
			"Role": "EmpireUnique",
			"TierAffinity": [ 3 ],
			"Multiplicity": "EmpireUnique",
			"SlotAffinity": "Empire",
			"StationType": "Normal",
			"LevelCap": 1,
			"Stats": [
				{
					"TargetAttribute": "COST_TIME",
					"UseArray": true,
					"ModifierArray": [ 2490 ]
				},
				{
					"TargetAttribute": "COST_MTL",
					"UseArray": true,
					"ModifierArray": [ 90690.46875 ]
				},
				{
					"TargetAttribute": "COST_GAS",
					"UseArray": true,
					"ModifierArray": [ 90690.46875 ]
				},
				{
					"TargetAttribute": "COST_CRS",
					"UseArray": true,
					"ModifierArray": [ 90690.46875 ]
				},
				{
					"TargetAttribute": "STAT_B_HP",
					"UseArray": true,
					"ModifierArray": [ 77812.5 ]
				},
				{
					"TargetAttribute": "STAT_PROD_SPG",
					"UseArray": true,
					"ModifierArray": [ 124.5 ]
				}
			]
		},
		{
			"Id": "100",
			"Name": "Les Apaches",
			"Description": "Corvette, Patrol Ship, Destroyer and Frigate fleets raiding from this station gain <color=green>20%</color> plunder.\n\n",
			"FullDescription": "Corvette, Patrol Ship, Destroyer and Frigate fleets raiding from this station gain <color=green>20%</color> plunder.\n\nYour armada's average plunder value lowers the amount of resources hidden by a defender's Container Port building.",
			"FlavourText": "Naming themselves after ancient rebels, Les Apaches members often honor their origin by dressing the part.",
			"ImageID": "1001",
			"Role": "Organization",
			"TierAffinity": [ 0 ],
			"Multiplicity": "StationUnique",
			"SlotAffinity": "Organization",
			"StationType": "Normal",
			"PathDependency": {
				"Path": "Military",
				"Required": 0
			},
			"LevelCap": 1,
			"Stats": [
				{
					"TargetAttribute": "COST_TIME",
					"UseArray": true,
					"ModifierArray": [ 315.00000000000006 ]
				},
				{
					"TargetAttribute": "COST_MTL",
					"UseArray": true,
					"ModifierArray": [ 19293.750000000004 ]
				},
				{
					"TargetAttribute": "COST_GAS",
					"UseArray": true,
					"ModifierArray": [ 7717.500000000002 ]
				},
				{
					"TargetAttribute": "COST_CRS",
					"UseArray": true,
					"ModifierArray": [ 11576.250000000002 ]
				},
				{
					"TargetAttribute": "STAT_B_HP",
					"UseArray": true,
					"ModifierArray": [ 10500.000000000002 ]
				},
				{
					"TargetAttribute": "STAT_PROD_SPG",
					"UseArray": true,
					"ModifierArray": [ 17.150000000000002 ]
				}
			],
			"Effects": [
				{
					"Origin": "Building",
					"Destination": "FleetsInRange",
					"Target": "LightAndHeavyCombatShips",
					"TargetAttribute": "UNIT_PLUNDER",
					"Type": "Modifier",
					"UseArray": true,
					"ModifierArray": [ 0.2 ],
					"Radius": 0,
					"Coverage": "Everyone"
				}
			]
		},
		{
			"Id": "101",
			"Name": "Royal Pilot School",
			"Description": "Reduces the time it costs to produce light units by <color=green>20%</color>.",
			"FullDescription": "Reduces the time it costs to produce light units by <color=green>20%</color>.",
			"FlavourText": "It actually has no royal ties, the founders just thought the name sounded cool.",
			"ImageID": "1011",
			"Role": "Organization",
			"TierAffinity": [ 0 ],
			"Multiplicity": "StationUnique",
			"SlotAffinity": "Organization",
			"StationType": "Normal",
			"PathDependency": {
				"Path": "Military",
				"Required": 0
			},
			"LevelCap": 1,
			"Stats": [
				{
					"TargetAttribute": "COST_TIME",
					"UseArray": true,
					"ModifierArray": [ 315.00000000000006 ]
				},
				{
					"TargetAttribute": "COST_MTL",
					"UseArray": true,
					"ModifierArray": [ 19293.750000000004 ]
				},
				{
					"TargetAttribute": "COST_GAS",
					"UseArray": true,
					"ModifierArray": [ 7717.500000000002 ]
				},
				{
					"TargetAttribute": "COST_CRS",
					"UseArray": true,
					"ModifierArray": [ 11576.250000000002 ]
				},
				{
					"TargetAttribute": "STAT_B_HP",
					"UseArray": true,
					"ModifierArray": [ 10500.000000000002 ]
				},
				{
					"TargetAttribute": "STAT_PROD_SPG",
					"UseArray": true,
					"ModifierArray": [ 17.150000000000002 ]
				}
			],
			"Effects": [
				{
					"Origin": "Building",
					"Destination": "Station",
					"Target": "SmallShips",
					"TargetAttribute": "COST_TIME",
					"Type": "PercentageModifier",
					"UseArray": true,
					"ModifierArray": [ -0.2 ]
				}
			]
		},
		{
			"Id": "110",
			"Name": "Bellicose Industries",
			"Description": "Missile Batteries now harvest resource fields (metal, gas and crystal) at <color=green>20%</color> per level per hour.",
			"FullDescription": "Missile Batteries now harvest resource fields (metal, gas and crystal) at <color=green>20%</color> per level per hour.",
			"FlavourText": "If not for their military contracts, Bellicose Industries would have been bankrupt long ago.",
			"ImageID": "1101",
			"Role": "Organization",
			"TierAffinity": [ 1 ],
			"Multiplicity": "StationUnique",
			"SlotAffinity": "Organization",
			"StationType": "Normal",
			"PathDependency": {
				"Path": "Military",
				"Required": 2
			},
			"LevelCap": 1,
			"Stats": [
				{
					"TargetAttribute": "COST_TIME",
					"UseArray": true,
					"ModifierArray": [ 922.5 ]
				},
				{
					"TargetAttribute": "COST_MTL",
					"UseArray": true,
					"ModifierArray": [ 56503.125 ]
				},
				{
					"TargetAttribute": "COST_GAS",
					"UseArray": true,
					"ModifierArray": [ 22601.25 ]
				},
				{
					"TargetAttribute": "COST_CRS",
					"UseArray": true,
					"ModifierArray": [ 33901.875 ]
				},
				{
					"TargetAttribute": "STAT_B_HP",
					"UseArray": true,
					"ModifierArray": [ 30749.999999999996 ]
				},
				{
					"TargetAttribute": "STAT_PROD_SPG",
					"UseArray": true,
					"ModifierArray": [ 50.224999999999994 ]
				}
			],
			"Effects": [
				{
					"Origin": "Building",
					"Destination": "Outpost",
					"Target": "MissileBattery",
					"TargetAttribute": "OP_MBAT_HARVEST_ENABLED",
					"Type": "Modifier",
					"UseArray": true,
					"ModifierArray": [ 1 ]
				}
			]
		},
		{
			"Id": "111",
			"Name": "Ataka",
			"Description": "Supplied fleets get <color=green>+3</color> speed while on raid or sabotage movements.",
			"FullDescription": "Supplied fleets get <color=green>+3</color> speed while on raid or sabotage movements.",
			"FlavourText": "The founder of Ataka is a rare case of an Anarch that broke ties with XAOC to become a commercial contractor instead.",
			"ImageID": 213,
			"Role": "Organization",
			"TierAffinity": [ 1 ],
			"Multiplicity": "StationUnique",
			"SlotAffinity": "Organization",
			"StationType": "Normal",
			"PathDependency": {
				"Path": "Military",
				"Required": 2
			},
			"LevelCap": 1,
			"Stats": [
				{
					"TargetAttribute": "COST_TIME",
					"UseArray": true,
					"ModifierArray": [ 922.5 ]
				},
				{
					"TargetAttribute": "COST_MTL",
					"UseArray": true,
					"ModifierArray": [ 56503.125 ]
				},
				{
					"TargetAttribute": "COST_GAS",
					"UseArray": true,
					"ModifierArray": [ 22601.25 ]
				},
				{
					"TargetAttribute": "COST_CRS",
					"UseArray": true,
					"ModifierArray": [ 33901.875 ]
				},
				{
					"TargetAttribute": "STAT_B_HP",
					"UseArray": true,
					"ModifierArray": [ 30749.999999999996 ]
				},
				{
					"TargetAttribute": "STAT_PROD_SPG",
					"UseArray": true,
					"ModifierArray": [ 50.224999999999994 ]
				}
			],
			"Effects": [
				{
					"Origin": "Building",
					"Destination": "Fleets",
					"Target": "Fleet",
					"TargetAttribute": "UNIT_SPD",
					"Type": "Modifier",
					"UseArray": true,
					"ModifierArray": [ 3 ],
					"Conditions": [
						{
							"$type": "OperationCondition",
							"AcceptedTypes": [ "Raid", "Sabotage", "SabotageStation" ]
						}
					]
				}
			]
		},
		{
			"Id": "120",
			"Name": "Craft Logistics",
			"Description": "Increases the radius of influence of the Logistics Hub by <color=green>1</color>.",
			"FullDescription": "Increases the radius of influence of the Logistics Hub by <color=green>1</color>.",
			"FlavourText": "Craft started out as an industrial player in the field of route optimization, but promptly switched to military contracting when the tactical applications of their technology (and the revenue that that promised) became apparent .",
			"ImageID": 214,
			"Role": "Organization",
			"TierAffinity": [ 2 ],
			"Multiplicity": "StationUnique",
			"SlotAffinity": "Organization",
			"StationType": "Normal",
			"PathDependency": {
				"Path": "Military",
				"Required": 4
			},
			"LevelCap": 1,
			"Stats": [
				{
					"TargetAttribute": "COST_TIME",
					"UseArray": true,
					"ModifierArray": [ 1395 ]
				},
				{
					"TargetAttribute": "COST_MTL",
					"UseArray": true,
					"ModifierArray": [ 85443.75 ]
				},
				{
					"TargetAttribute": "COST_GAS",
					"UseArray": true,
					"ModifierArray": [ 34177.5 ]
				},
				{
					"TargetAttribute": "COST_CRS",
					"UseArray": true,
					"ModifierArray": [ 51266.25 ]
				},
				{
					"TargetAttribute": "STAT_B_HP",
					"UseArray": true,
					"ModifierArray": [ 46500 ]
				},
				{
					"TargetAttribute": "STAT_PROD_SPG",
					"UseArray": true,
					"ModifierArray": [ 75.95 ]
				}
			],
			"Effects": [
				{
					"Origin": "Building",
					"Destination": "Outpost",
					"Target": "LogisticsHub",
					"TargetAttribute": "OP_RADIUS",
					"Type": "Modifier",
					"UseArray": true,
					"ModifierArray": [ 1 ]
				}
			]
		},
		{
			"Id": "121",
			"Name": "Gatos Fritos",
			"Description": "Supplied Corvettes get <color=green>+30</color> firepower and -<color=red>75</color> hit points while raiding.\nSupplied Destroyers get <color=green>+150</color> firepower and <color=red>-375</color> hit points while raiding.",
			"FullDescription": "Supplied Corvettes get <color=green>+30</color> firepower and -<color=red>75</color> hit points while raiding.\nSupplied Destroyers get <color=green>+150</color> firepower and <color=red>-375</color> hit points while raiding.",
			"FlavourText": "\"Have you seen the damage those accursed hooligans have done to our fleets!?\"\n\"Have you seen the damage they did to our opponent's fleets?\"",
			"ImageID": 206,
			"Role": "Organization",
			"TierAffinity": [ 2 ],
			"Multiplicity": "StationUnique",
			"SlotAffinity": "Organization",
			"StationType": "Normal",
			"PathDependency": {
				"Path": "Military",
				"Required": 4
			},
			"LevelCap": 1,
			"Stats": [
				{
					"TargetAttribute": "COST_TIME",
					"UseArray": true,
					"ModifierArray": [ 1395 ]
				},
				{
					"TargetAttribute": "COST_MTL",
					"UseArray": true,
					"ModifierArray": [ 85443.75 ]
				},
				{
					"TargetAttribute": "COST_GAS",
					"UseArray": true,
					"ModifierArray": [ 34177.5 ]
				},
				{
					"TargetAttribute": "COST_CRS",
					"UseArray": true,
					"ModifierArray": [ 51266.25 ]
				},
				{
					"TargetAttribute": "STAT_B_HP",
					"UseArray": true,
					"ModifierArray": [ 46500 ]
				},
				{
					"TargetAttribute": "STAT_PROD_SPG",
					"UseArray": true,
					"ModifierArray": [ 75.95 ]
				}
			],
			"Effects": [
				{
					"Origin": "Building",
					"Destination": "Fleets",
					"Target": "LightAssault",
					"TargetAttribute": "UNIT_FIREPOWER",
					"Type": "Modifier",
					"UseArray": true,
					"ModifierArray": [ 30 ],
					"Conditions": [
						{
							"$type": "OperationCondition",
							"AcceptedTypes": [ "Raid" ]
						}
					]
				},
				{
					"Origin": "Building",
					"Destination": "Fleets",
					"Target": "LightAssault",
					"TargetAttribute": "UNIT_HP",
					"Type": "Modifier",
					"UseArray": true,
					"ModifierArray": [ -75 ],
					"Conditions": [
						{
							"$type": "OperationCondition",
							"AcceptedTypes": [ "Raid" ]
						}
					]
				},
				{
					"Origin": "Building",
					"Destination": "Fleets",
					"Target": "HeavyAssault",
					"TargetAttribute": "UNIT_FIREPOWER",
					"Type": "Modifier",
					"UseArray": true,
					"ModifierArray": [ 150 ],
					"Conditions": [
						{
							"$type": "OperationCondition",
							"AcceptedTypes": [ "Raid" ]
						}
					]
				},
				{
					"Origin": "Building",
					"Destination": "Fleets",
					"Target": "HeavyAssault",
					"TargetAttribute": "UNIT_HP",
					"Type": "Modifier",
					"UseArray": true,
					"ModifierArray": [ -375 ],
					"Conditions": [
						{
							"$type": "OperationCondition",
							"AcceptedTypes": [ "Raid" ]
						}
					]
				}
			]
		},
		{
			"Id": "130",
			"Name": "Orbital Synfonica",
			"Description": "The Heavy Ship Assembly outpost can now additionally produce gunships.",
			"FullDescription": "The Heavy Ship Assembly outpost can now additionally produce gunships.",
			"FlavourText": "A hymn of fire, a requiem to the dying, a symphony of destruction.",
			"ImageID": "1301",
			"Role": "Organization",
			"TierAffinity": [ 3 ],
			"Multiplicity": "StationUnique",
			"SlotAffinity": "Organization",
			"StationType": "Normal",
			"PathDependency": {
				"Path": "Military",
				"Required": 6
			},
			"LevelCap": 1,
			"Stats": [
				{
					"TargetAttribute": "COST_TIME",
					"UseArray": true,
					"ModifierArray": [ 1867.5 ]
				},
				{
					"TargetAttribute": "COST_MTL",
					"UseArray": true,
					"ModifierArray": [ 114384.375 ]
				},
				{
					"TargetAttribute": "COST_GAS",
					"UseArray": true,
					"ModifierArray": [ 45753.75 ]
				},
				{
					"TargetAttribute": "COST_CRS",
					"UseArray": true,
					"ModifierArray": [ 68630.625 ]
				},
				{
					"TargetAttribute": "STAT_B_HP",
					"UseArray": true,
					"ModifierArray": [ 62250 ]
				},
				{
					"TargetAttribute": "STAT_PROD_SPG",
					"UseArray": true,
					"ModifierArray": [ 101.675 ]
				}
			]
		},
		{
			"Id": "131",
			"Name": "Magna Exercitus",
			"Description": "Supplied <color=green>[ Light | heavy | capital ]</color> fleets gain <color=green>[ 3 | 15 | 75 ]</color> firepower and <color=green>[ 7.5 | 37.5 | 187.5 ]</color> hit points.",
			"FullDescription": "Supplied <color=green>[ Light | heavy | capital ]</color> fleets gain <color=green>[ 3 | 15 | 75 ]</color> firepower and <color=green>[ 7.5 | 37.5 | 187.5 ]</color> hit points.",
			"FlavourText": "\"The only honor they know is to their contracts, but their advisors are indeed excellent.\" \n-- Warlord Mumei Nakamura on Magna Exercitus",
			"ImageID": "1311",
			"Role": "Organization",
			"TierAffinity": [ 3 ],
			"Multiplicity": "StationUnique",
			"SlotAffinity": "Organization",
			"StationType": "Normal",
			"PathDependency": {
				"Path": "Military",
				"Required": 6
			},
			"LevelCap": 1,
			"Stats": [
				{
					"TargetAttribute": "COST_TIME",
					"UseArray": true,
					"ModifierArray": [ 1867.5 ]
				},
				{
					"TargetAttribute": "COST_MTL",
					"UseArray": true,
					"ModifierArray": [ 114384.375 ]
				},
				{
					"TargetAttribute": "COST_GAS",
					"UseArray": true,
					"ModifierArray": [ 45753.75 ]
				},
				{
					"TargetAttribute": "COST_CRS",
					"UseArray": true,
					"ModifierArray": [ 68630.625 ]
				},
				{
					"TargetAttribute": "STAT_B_HP",
					"UseArray": true,
					"ModifierArray": [ 62250 ]
				},
				{
					"TargetAttribute": "STAT_PROD_SPG",
					"UseArray": true,
					"ModifierArray": [ 101.675 ]
				}
			],
			"Effects": [
				{
					"Origin": "Building",
					"Destination": "Fleets",
					"Target": "SmallShips",
					"TargetAttribute": "UNIT_FIREPOWER",
					"Type": "Modifier",
					"UseArray": true,
					"ModifierArray": [ 3 ]
				},
				{
					"Origin": "Building",
					"Destination": "Fleets",
					"Target": "LargeShips",
					"TargetAttribute": "UNIT_FIREPOWER",
					"Type": "Modifier",
					"UseArray": true,
					"ModifierArray": [ 15 ]
				},
				{
					"Origin": "Building",
					"Destination": "Fleets",
					"Target": "CapitalShips",
					"TargetAttribute": "UNIT_FIREPOWER",
					"Type": "Modifier",
					"UseArray": true,
					"ModifierArray": [ 75 ]
				},
				{
					"Origin": "Building",
					"Destination": "Fleets",
					"Target": "SmallShips",
					"TargetAttribute": "UNIT_HP",
					"Type": "Modifier",
					"UseArray": true,
					"ModifierArray": [ 7.5 ]
				},
				{
					"Origin": "Building",
					"Destination": "Fleets",
					"Target": "LargeShips",
					"TargetAttribute": "UNIT_HP",
					"Type": "Modifier",
					"UseArray": true,
					"ModifierArray": [ 37.5 ]
				},
				{
					"Origin": "Building",
					"Destination": "Fleets",
					"Target": "CapitalShips",
					"TargetAttribute": "UNIT_HP",
					"Type": "Modifier",
					"UseArray": true,
					"ModifierArray": [ 187.5 ]
				}
			]
		},
		{
			"Id": "200",
			"Name": "Civic Intelligence",
			"Description": "All your spies get <color=green>5</color> spy strength.\nAdds <color=green>2</color> spies to your empire spy pool.",
			"FullDescription": "All your spies get <color=green>5</color> spy strength.\nAdds <color=green>2</color> spies to your empire spy pool.",
			"FlavourText": "Tianchao's misuse of their monopoly on information brokerage led to the steep rise of Civic Intelligence as an independent alternative.",
			"ImageID": "2001",
			"Role": "Organization",
			"TierAffinity": [ 0 ],
			"Multiplicity": "StationUnique",
			"SlotAffinity": "Organization",
			"StationType": "Normal",
			"PathDependency": {
				"Path": "Domain",
				"Required": 0
			},
			"LevelCap": 1,
			"Stats": [
				{
					"TargetAttribute": "COST_TIME",
					"UseArray": true,
					"ModifierArray": [ 315.00000000000006 ]
				},
				{
					"TargetAttribute": "COST_MTL",
					"UseArray": true,
					"ModifierArray": [ 11576.250000000002 ]
				},
				{
					"TargetAttribute": "COST_GAS",
					"UseArray": true,
					"ModifierArray": [ 19293.750000000004 ]
				},
				{
					"TargetAttribute": "COST_CRS",
					"UseArray": true,
					"ModifierArray": [ 7717.500000000002 ]
				},
				{
					"TargetAttribute": "STAT_B_HP",
					"UseArray": true,
					"ModifierArray": [ 10500.000000000002 ]
				},
				{
					"TargetAttribute": "STAT_PROD_SPG",
					"UseArray": true,
					"ModifierArray": [ 17.150000000000002 ]
				}
			],
			"Effects": [
				{
					"Origin": "Building",
					"Destination": "Empire",
					"Target": "Commander",
					"TargetAttribute": "OPERATIVES_STRENGTH",
					"Type": "Modifier",
					"UseArray": true,
					"ModifierArray": [ 5 ]
				},
				{
					"Origin": "Building",
					"Destination": "Empire",
					"Target": "Commander",
					"TargetAttribute": "OPERATIVES_COUNT",
					"Type": "Modifier",
					"UseArray": true,
					"ModifierArray": [ 2 ]
				}
			]
		},
		{
			"Id": "201",
			"Name": "Solheim Institute",
			"Description": "Lowers the mission requirements for fleets running missions from this station by <color=green>10%</color>.\nLowers the number of escort fleets required when running missions from this station by <color=green>1</color>.",
			"FullDescription": "Lowers the mission requirements for fleets running missions from this station by <color=green>10%</color>.\nLowers the number of escort fleets required when running missions from this station by <color=green>1</color>.",
			"FlavourText": "Due to their adventurous nature, the presence of the Solheim family is mostly defined by the lack of it.",
			"ImageID": "2011",
			"Role": "Organization",
			"TierAffinity": [ 0 ],
			"Multiplicity": "StationUnique",
			"SlotAffinity": "Organization",
			"StationType": "Normal",
			"PathDependency": {
				"Path": "Domain",
				"Required": 0
			},
			"LevelCap": 1,
			"Stats": [
				{
					"TargetAttribute": "COST_TIME",
					"UseArray": true,
					"ModifierArray": [ 315.00000000000006 ]
				},
				{
					"TargetAttribute": "COST_MTL",
					"UseArray": true,
					"ModifierArray": [ 11576.250000000002 ]
				},
				{
					"TargetAttribute": "COST_GAS",
					"UseArray": true,
					"ModifierArray": [ 19293.750000000004 ]
				},
				{
					"TargetAttribute": "COST_CRS",
					"UseArray": true,
					"ModifierArray": [ 7717.500000000002 ]
				},
				{
					"TargetAttribute": "STAT_B_HP",
					"UseArray": true,
					"ModifierArray": [ 10500.000000000002 ]
				},
				{
					"TargetAttribute": "STAT_PROD_SPG",
					"UseArray": true,
					"ModifierArray": [ 17.150000000000002 ]
				}
			],
			"Effects": [
				{
					"Origin": "Building",
					"Destination": "Station",
					"Target": "Station",
					"TargetAttribute": "GE_MISSION_RECOMMENDED_TOTAL_MODIFIER",
					"Type": "Modifier",
					"UseArray": true,
					"ModifierArray": [ -0.1 ]
				},
				{
					"Origin": "Building",
					"Destination": "Station",
					"Target": "Station",
					"TargetAttribute": "GE_REQUIRED_ESCORT_MODIFIER",
					"Type": "Modifier",
					"UseArray": true,
					"ModifierArray": [ -1 ]
				}
			]
		},
		{
			"Id": "210",
			"Name": "Nightcorps",
			"Description": "Scanners now additionally grant <color=green>3</color> spy defense to your and your allies' stations within its radius of influence per its level.\n\nEffect does not stack, the highest level Scanner effect is always used.",
			"FullDescription": "Scanners now additionally grant <color=green>3</color> spy defense to your and your allies' stations within its radius of influence per its level.\n\nEffect does not stack, the highest level Scanner effect is always used.",
			"FlavourText": "The spy's terrible screams echoed between his pleads for mercy, almost in rhythm to the neural injector's beeps. Pain without injury meant pain without end.\n\n\"Tell us what we need to know and this can all go away.\"",
			"ImageID": "2101",
			"Role": "Organization",
			"TierAffinity": [ 1 ],
			"Multiplicity": "StationUnique",
			"SlotAffinity": "Organization",
			"StationType": "Normal",
			"PathDependency": {
				"Path": "Domain",
				"Required": 2
			},
			"LevelCap": 1,
			"Stats": [
				{
					"TargetAttribute": "COST_TIME",
					"UseArray": true,
					"ModifierArray": [ 922.5 ]
				},
				{
					"TargetAttribute": "COST_MTL",
					"UseArray": true,
					"ModifierArray": [ 33901.875 ]
				},
				{
					"TargetAttribute": "COST_GAS",
					"UseArray": true,
					"ModifierArray": [ 56503.125 ]
				},
				{
					"TargetAttribute": "COST_CRS",
					"UseArray": true,
					"ModifierArray": [ 22601.25 ]
				},
				{
					"TargetAttribute": "STAT_B_HP",
					"UseArray": true,
					"ModifierArray": [ 30749.999999999996 ]
				},
				{
					"TargetAttribute": "STAT_PROD_SPG",
					"UseArray": true,
					"ModifierArray": [ 50.224999999999994 ]
				}
			],
			"Effects": [
				{
					"Origin": "Building",
					"Destination": "Outpost",
					"Target": "Scanner",
					"TargetAttribute": "OP_SCANNER_STAT_SIGINT_ENABLE",
					"Type": "Modifier",
					"UseArray": true,
					"ModifierArray": [ 1 ]
				}
			]
		},
		{
			"Id": "211",
			"Name": "Romberg DSR",
			"Description": "Scout and Recon fleets supplied by this station gain <color=green>50%</color> speed while on scan movements.",
			"FullDescription": "Scout and Recon fleets supplied by this station gain <color=green>50%</color> speed while on scan movements.",
			"FlavourText": "Romberg Deep Space Reconnaissance!\nIf you're not in-the-know, you're out of the now!",
			"ImageID": 203,
			"Role": "Organization",
			"TierAffinity": [ 1 ],
			"Multiplicity": "StationUnique",
			"SlotAffinity": "Organization",
			"StationType": "Normal",
			"PathDependency": {
				"Path": "Domain",
				"Required": 2
			},
			"LevelCap": 1,
			"Stats": [
				{
					"TargetAttribute": "COST_TIME",
					"UseArray": true,
					"ModifierArray": [ 922.5 ]
				},
				{
					"TargetAttribute": "COST_MTL",
					"UseArray": true,
					"ModifierArray": [ 33901.875 ]
				},
				{
					"TargetAttribute": "COST_GAS",
					"UseArray": true,
					"ModifierArray": [ 56503.125 ]
				},
				{
					"TargetAttribute": "COST_CRS",
					"UseArray": true,
					"ModifierArray": [ 22601.25 ]
				},
				{
					"TargetAttribute": "STAT_B_HP",
					"UseArray": true,
					"ModifierArray": [ 30749.999999999996 ]
				},
				{
					"TargetAttribute": "STAT_PROD_SPG",
					"UseArray": true,
					"ModifierArray": [ 50.224999999999994 ]
				}
			],
			"Effects": [
				{
					"Origin": "Building",
					"Destination": "Fleets",
					"Target": "Scout",
					"TargetAttribute": "UNIT_SPD",
					"Type": "Multiplier",
					"UseArray": true,
					"ModifierArray": [ 0.5 ],
					"Conditions": [
						{
							"$type": "OperationCondition",
							"AcceptedTypes": [ "Scan" ]
						}
					]
				},
				{
					"Origin": "Building",
					"Destination": "Fleets",
					"Target": "HeavyScout",
					"TargetAttribute": "UNIT_SPD",
					"Type": "Multiplier",
					"UseArray": true,
					"ModifierArray": [ 0.5 ],
					"Conditions": [
						{
							"$type": "OperationCondition",
							"AcceptedTypes": [ "Scan" ]
						}
					]
				}
			]
		},
		{
			"Id": "220",
			"Name": "Expedialis",
			"Description": "Increases the speed bonus by the stargate by <color=green>1</color>.",
			"FullDescription": "Increases the speed bonus by the stargate by <color=green>1</color>.",
			"FlavourText": "Expedialis developed a special field algorithm that allowed stargates to function more effectively, securing a monopoly in the process.",
			"ImageID": "2201",
			"Role": "Organization",
			"TierAffinity": [ 2 ],
			"Multiplicity": "StationUnique",
			"SlotAffinity": "Organization",
			"StationType": "Normal",
			"PathDependency": {
				"Path": "Domain",
				"Required": 4
			},
			"LevelCap": 1,
			"Stats": [
				{
					"TargetAttribute": "COST_TIME",
					"UseArray": true,
					"ModifierArray": [ 1395 ]
				},
				{
					"TargetAttribute": "COST_MTL",
					"UseArray": true,
					"ModifierArray": [ 51266.25 ]
				},
				{
					"TargetAttribute": "COST_GAS",
					"UseArray": true,
					"ModifierArray": [ 85443.75 ]
				},
				{
					"TargetAttribute": "COST_CRS",
					"UseArray": true,
					"ModifierArray": [ 34177.5 ]
				},
				{
					"TargetAttribute": "STAT_B_HP",
					"UseArray": true,
					"ModifierArray": [ 46500 ]
				},
				{
					"TargetAttribute": "STAT_PROD_SPG",
					"UseArray": true,
					"ModifierArray": [ 75.95 ]
				}
			],
			"Effects": [
				{
					"Origin": "Building",
					"Destination": "Outpost",
					"Target": "Stargate",
					"TargetAttribute": "OP_SG_MOVESPDBOOST",
					"Type": "Modifier",
					"UseArray": true,
					"ModifierArray": [ 1 ]
				}
			]
		},
		{
			"Id": "221",
			"Name": "RG Consortium",
			"Description": "Increases the station harvest rate by <color=green>70%</color>.",
			"FullDescription": "Increases the station harvest rate by <color=green>70%</color>.",
			"FlavourText": "RG steadfastly holds to the ideal of mutually beneficial cooperation, sharing the riches of space with its many member organizations.",
			"ImageID": 202,
			"Role": "Organization",
			"TierAffinity": [ 2 ],
			"Multiplicity": "StationUnique",
			"SlotAffinity": "Organization",
			"StationType": "Normal",
			"PathDependency": {
				"Path": "Domain",
				"Required": 4
			},
			"LevelCap": 1,
			"Stats": [
				{
					"TargetAttribute": "COST_TIME",
					"UseArray": true,
					"ModifierArray": [ 1395 ]
				},
				{
					"TargetAttribute": "COST_MTL",
					"UseArray": true,
					"ModifierArray": [ 51266.25 ]
				},
				{
					"TargetAttribute": "COST_GAS",
					"UseArray": true,
					"ModifierArray": [ 85443.75 ]
				},
				{
					"TargetAttribute": "COST_CRS",
					"UseArray": true,
					"ModifierArray": [ 34177.5 ]
				},
				{
					"TargetAttribute": "STAT_B_HP",
					"UseArray": true,
					"ModifierArray": [ 46500 ]
				},
				{
					"TargetAttribute": "STAT_PROD_SPG",
					"UseArray": true,
					"ModifierArray": [ 75.95 ]
				}
			],
			"Effects": [
				{
					"Origin": "Building",
					"Destination": "Station",
					"Target": "Station",
					"TargetAttribute": "STAT_LOCAL_HARVEST_MODIFIER",
					"Type": "Modifier",
					"UseArray": true,
					"ModifierArray": [ 0.7 ]
				}
			]
		},
		{
			"Id": "230",
			"Name": "New Horizons",
			"Description": "Increases the station's claim radius by <color=green>1</color>.",
			"FullDescription": "Increases the station's claim radius by <color=green>1</color>.",
			"FlavourText": "When New Horizons set up shop, neighbouring people tend to wake up to the surprise of having been \"liberated\" overnight, despite having been perfectly free when they went to bed.",
			"ImageID": 212,
			"Role": "Organization",
			"TierAffinity": [ 3 ],
			"Multiplicity": "StationUnique",
			"SlotAffinity": "Organization",
			"StationType": "Normal",
			"PathDependency": {
				"Path": "Domain",
				"Required": 6
			},
			"LevelCap": 1,
			"Stats": [
				{
					"TargetAttribute": "COST_TIME",
					"UseArray": true,
					"ModifierArray": [ 1867.5 ]
				},
				{
					"TargetAttribute": "COST_MTL",
					"UseArray": true,
					"ModifierArray": [ 68630.625 ]
				},
				{
					"TargetAttribute": "COST_GAS",
					"UseArray": true,
					"ModifierArray": [ 114384.375 ]
				},
				{
					"TargetAttribute": "COST_CRS",
					"UseArray": true,
					"ModifierArray": [ 45753.75 ]
				},
				{
					"TargetAttribute": "STAT_B_HP",
					"UseArray": true,
					"ModifierArray": [ 62250 ]
				},
				{
					"TargetAttribute": "STAT_PROD_SPG",
					"UseArray": true,
					"ModifierArray": [ 101.675 ]
				}
			],
			"Effects": [
				{
					"Origin": "Building",
					"Destination": "Station",
					"Target": "Station",
					"TargetAttribute": "STAT_CLAIMRADIUS",
					"Type": "Modifier",
					"UseArray": true,
					"ModifierArray": [ 1 ]
				}
			]
		},
		{
			"Id": "231",
			"Name": "Chattle's Human Resources",
			"Description": "Increases the station's capacity to stream labor by the amount harvested by its Habitation Dome.",
			"FullDescription": "Increases the station's capacity to stream labor by the amount harvested by its Habitation Dome.",
			"FlavourText": "\"Bippidy-boppidy, people are property.\"\n--Rosemary Chattle",
			"ImageID": "2311",
			"Role": "Organization",
			"TierAffinity": [ 3 ],
			"Multiplicity": "StationUnique",
			"SlotAffinity": "Organization",
			"StationType": "Normal",
			"PathDependency": {
				"Path": "Domain",
				"Required": 6
			},
			"LevelCap": 1,
			"Stats": [
				{
					"TargetAttribute": "COST_TIME",
					"UseArray": true,
					"ModifierArray": [ 1867.5 ]
				},
				{
					"TargetAttribute": "COST_MTL",
					"UseArray": true,
					"ModifierArray": [ 68630.625 ]
				},
				{
					"TargetAttribute": "COST_GAS",
					"UseArray": true,
					"ModifierArray": [ 114384.375 ]
				},
				{
					"TargetAttribute": "COST_CRS",
					"UseArray": true,
					"ModifierArray": [ 45753.75 ]
				},
				{
					"TargetAttribute": "STAT_B_HP",
					"UseArray": true,
					"ModifierArray": [ 62250 ]
				},
				{
					"TargetAttribute": "STAT_PROD_SPG",
					"UseArray": true,
					"ModifierArray": [ 101.675 ]
				}
			],
			"Effects": [
				{
					"Origin": "Building",
					"Destination": "Outpost",
					"Target": "HabitationDome",
					"TargetAttribute": "OP_HD_STREAMING_ENABLED",
					"Type": "Modifier",
					"UseArray": true,
					"ModifierArray": [ 1 ]
				}
			]
		},
		{
			"Id": "300",
			"Name": "Trans-Galactic Exports",
			"Description": "Adds <color=green>10</color> freighters to your empire freighter pool.\nFreighters departing this station gain <color=green>50%</color> cargo.",
			"FullDescription": "Adds <color=green>10</color> freighters to your empire freighter pool.\nFreighters departing this station gain <color=green>50%</color> cargo.",
			"FlavourText": "Trans-Galactic is a logistical behemoth in the galaxy, running all major trade routes for nearly every empire. But instead of the awe they feel they deserve, their name usually only inspires a delivery date complaint.",
			"ImageID": 204,
			"Role": "Organization",
			"TierAffinity": [ 0 ],
			"Multiplicity": "StationUnique",
			"SlotAffinity": "Organization",
			"StationType": "Normal",
			"PathDependency": {
				"Path": "Industry",
				"Required": 0
			},
			"LevelCap": 1,
			"Stats": [
				{
					"TargetAttribute": "COST_TIME",
					"UseArray": true,
					"ModifierArray": [ 315.00000000000006 ]
				},
				{
					"TargetAttribute": "COST_MTL",
					"UseArray": true,
					"ModifierArray": [ 7717.500000000002 ]
				},
				{
					"TargetAttribute": "COST_GAS",
					"UseArray": true,
					"ModifierArray": [ 11576.250000000002 ]
				},
				{
					"TargetAttribute": "COST_CRS",
					"UseArray": true,
					"ModifierArray": [ 19293.750000000004 ]
				},
				{
					"TargetAttribute": "STAT_B_HP",
					"UseArray": true,
					"ModifierArray": [ 10500.000000000002 ]
				},
				{
					"TargetAttribute": "STAT_PROD_SPG",
					"UseArray": true,
					"ModifierArray": [ 17.150000000000002 ]
				}
			],
			"Effects": [
				{
					"Origin": "Building",
					"Destination": "Station",
					"Target": "Station",
					"TargetAttribute": "STAT_FREIGHTCOUNT",
					"Type": "Modifier",
					"UseArray": true,
					"ModifierArray": [ 10 ]
				},
				{
					"Origin": "Building",
					"Destination": "Station",
					"Target": "Station",
					"TargetAttribute": "STAT_FREIGHTER_CARGO",
					"Type": "Multiplier",
					"UseArray": true,
					"ModifierArray": [ 0.5 ]
				}
			]
		},
		{
			"Id": "301",
			"Name": "Helios Express",
			"Description": "Industrial fleets harvesting solar flares from this station gain <color=green>5</color> speed.",
			"FullDescription": "Industrial fleets harvesting solar flares from this station gain <color=green>5</color> speed.",
			"FlavourText": "Linking the plasma storage chambers directly to the propulsion system affords Helios industrials unprecedented speeds while simultaneously creating working conditions only fit for borts.",
			"ImageID": 208,
			"Role": "Organization",
			"TierAffinity": [ 0 ],
			"Multiplicity": "StationUnique",
			"SlotAffinity": "Organization",
			"StationType": "Normal",
			"PathDependency": {
				"Path": "Industry",
				"Required": 0
			},
			"LevelCap": 1,
			"Stats": [
				{
					"TargetAttribute": "COST_TIME",
					"UseArray": true,
					"ModifierArray": [ 315.00000000000006 ]
				},
				{
					"TargetAttribute": "COST_MTL",
					"UseArray": true,
					"ModifierArray": [ 7717.500000000002 ]
				},
				{
					"TargetAttribute": "COST_GAS",
					"UseArray": true,
					"ModifierArray": [ 11576.250000000002 ]
				},
				{
					"TargetAttribute": "COST_CRS",
					"UseArray": true,
					"ModifierArray": [ 19293.750000000004 ]
				},
				{
					"TargetAttribute": "STAT_B_HP",
					"UseArray": true,
					"ModifierArray": [ 10500.000000000002 ]
				},
				{
					"TargetAttribute": "STAT_PROD_SPG",
					"UseArray": true,
					"ModifierArray": [ 17.150000000000002 ]
				}
			],
			"Effects": [
				{
					"Origin": "Building",
					"Destination": "FleetsInRange",
					"Target": "Industrial",
					"TargetAttribute": "UNIT_SPD",
					"Type": "Modifier",
					"UseArray": true,
					"ModifierArray": [ 5 ],
					"Conditions": [
						{
							"$type": "OperationCondition",
							"AcceptedTypes": [ "CompleteStarMission" ]
						}
					],
					"Radius": 0,
					"Coverage": "Owner"
				}
			]
		},
		{
			"Id": "310",
			"Name": "Zirachi Brothers",
			"Description": "Unlocks an extra production slot to the station that fits a metal, gas or crystal refinery.",
			"FullDescription": "Unlocks an extra production slot to the station that fits a metal, gas or crystal refinery.",
			"FlavourText": "\"Honest work is the foundation of a family, of a city, of all of society.\" \n-- Apostolos Zirachi",
			"ImageID": "3101",
			"Role": "Organization",
			"TierAffinity": [ 1 ],
			"Multiplicity": "StationUnique",
			"SlotAffinity": "Organization",
			"StationType": "Normal",
			"PathDependency": {
				"Path": "Industry",
				"Required": 2
			},
			"LevelCap": 1,
			"Stats": [
				{
					"TargetAttribute": "COST_TIME",
					"UseArray": true,
					"ModifierArray": [ 922.5 ]
				},
				{
					"TargetAttribute": "COST_MTL",
					"UseArray": true,
					"ModifierArray": [ 22601.25 ]
				},
				{
					"TargetAttribute": "COST_GAS",
					"UseArray": true,
					"ModifierArray": [ 33901.875 ]
				},
				{
					"TargetAttribute": "COST_CRS",
					"UseArray": true,
					"ModifierArray": [ 56503.125 ]
				},
				{
					"TargetAttribute": "STAT_B_HP",
					"UseArray": true,
					"ModifierArray": [ 30749.999999999996 ]
				},
				{
					"TargetAttribute": "STAT_PROD_SPG",
					"UseArray": true,
					"ModifierArray": [ 50.224999999999994 ]
				}
			]
		},
		{
			"Id": "311",
			"Name": "Primwell & Hauft",
			"Description": "Increase the Trading Port's streaming capacity by an additional 100%",
			"FullDescription": "Increases the Trading Port's streaming capacity by <color=green>100%</color>.",
			"FlavourText": "Engineer Martin Primwell and logistician Anne Hauft founded a corporation that revolutionized the freighting market by introducing automated drone freighting.",
			"ImageID": 200,
			"Role": "Organization",
			"TierAffinity": [ 1 ],
			"Multiplicity": "StationUnique",
			"SlotAffinity": "Organization",
			"StationType": "Normal",
			"PathDependency": {
				"Path": "Industry",
				"Required": 2
			},
			"LevelCap": 1,
			"Stats": [
				{
					"TargetAttribute": "COST_TIME",
					"UseArray": true,
					"ModifierArray": [ 922.5 ]
				},
				{
					"TargetAttribute": "COST_MTL",
					"UseArray": true,
					"ModifierArray": [ 22601.25 ]
				},
				{
					"TargetAttribute": "COST_GAS",
					"UseArray": true,
					"ModifierArray": [ 33901.875 ]
				},
				{
					"TargetAttribute": "COST_CRS",
					"UseArray": true,
					"ModifierArray": [ 56503.125 ]
				},
				{
					"TargetAttribute": "STAT_B_HP",
					"UseArray": true,
					"ModifierArray": [ 30749.999999999996 ]
				},
				{
					"TargetAttribute": "STAT_PROD_SPG",
					"UseArray": true,
					"ModifierArray": [ 50.224999999999994 ]
				}
			],
			"Effects": [
				{
					"Origin": "Building",
					"Destination": "Outpost",
					"Target": "TradingPort",
					"TargetAttribute": "OP_TRDP_STREAMING_MULTIPLIER",
					"Type": "Multiplier",
					"UseArray": true,
					"ModifierArray": [ 1 ]
				}
			]
		},
		{
			"Id": "320",
			"Name": "Huang's Emporium",
			"Description": "Lowers the resource exchange ratio for this station by <color=green>1</color>.",
			"FullDescription": "Lowers the resource exchange ratio for this station by <color=green>1</color>.",
			"FlavourText": "\"You know those salesman sayings, like, 'He could sell snow to eskimos and such?\"\n\"Yeah?  Are they about Huang?\"\n\"No, Huang copyrighted them, I now owe him two credits.\"",
			"ImageID": 209,
			"Role": "Organization",
			"TierAffinity": [ 2 ],
			"Multiplicity": "StationUnique",
			"SlotAffinity": "Organization",
			"StationType": "Normal",
			"PathDependency": {
				"Path": "Industry",
				"Required": 4
			},
			"LevelCap": 1,
			"Stats": [
				{
					"TargetAttribute": "COST_TIME",
					"UseArray": true,
					"ModifierArray": [ 1395 ]
				},
				{
					"TargetAttribute": "COST_MTL",
					"UseArray": true,
					"ModifierArray": [ 34177.5 ]
				},
				{
					"TargetAttribute": "COST_GAS",
					"UseArray": true,
					"ModifierArray": [ 51266.25 ]
				},
				{
					"TargetAttribute": "COST_CRS",
					"UseArray": true,
					"ModifierArray": [ 85443.75 ]
				},
				{
					"TargetAttribute": "STAT_B_HP",
					"UseArray": true,
					"ModifierArray": [ 46500 ]
				},
				{
					"TargetAttribute": "STAT_PROD_SPG",
					"UseArray": true,
					"ModifierArray": [ 75.95 ]
				}
			],
			"Effects": [
				{
					"Origin": "Building",
					"Destination": "Station",
					"Target": "Station",
					"TargetAttribute": "STAT_RESOURCE_EXCHANGE_RATE",
					"Type": "Modifier",
					"UseArray": true,
					"ModifierArray": [ -1 ]
				}
			]
		},
		{
			"Id": "321",
			"Name": "Gubernatorial Colonial",
			"Description": "Increases the claim radius of the fortress by <color=green>1</color>.",
			"FullDescription": "Increases the claim radius of the fortress by <color=green>1</color>.",
			"FlavourText": "The GC has on numerous occasions been found guilty of illegally settling already claimed space.",
			"ImageID": 207,
			"Role": "Organization",
			"TierAffinity": [ 2 ],
			"Multiplicity": "StationUnique",
			"SlotAffinity": "Organization",
			"StationType": "Normal",
			"PathDependency": {
				"Path": "Industry",
				"Required": 4
			},
			"LevelCap": 1,
			"Stats": [
				{
					"TargetAttribute": "COST_TIME",
					"UseArray": true,
					"ModifierArray": [ 1395 ]
				},
				{
					"TargetAttribute": "COST_MTL",
					"UseArray": true,
					"ModifierArray": [ 34177.5 ]
				},
				{
					"TargetAttribute": "COST_GAS",
					"UseArray": true,
					"ModifierArray": [ 51266.25 ]
				},
				{
					"TargetAttribute": "COST_CRS",
					"UseArray": true,
					"ModifierArray": [ 85443.75 ]
				},
				{
					"TargetAttribute": "STAT_B_HP",
					"UseArray": true,
					"ModifierArray": [ 46500 ]
				},
				{
					"TargetAttribute": "STAT_PROD_SPG",
					"UseArray": true,
					"ModifierArray": [ 75.95 ]
				}
			],
			"Effects": [
				{
					"Origin": "Building",
					"Destination": "Outpost",
					"Target": "Fortress",
					"TargetAttribute": "OP_CLAIM_RADIUS",
					"Type": "Modifier",
					"UseArray": true,
					"ModifierArray": [ 1 ]
				}
			]
		},
		{
			"Id": "330",
			"Name": "Robwell Freight Brokerage",
			"Description": "Freighters departing this station gain <color=green>50%</color> cargo.\n\nAllows the station to stream <color=green>750</color> metal, gas and crystal.",
			"FullDescription": "Freighters departing this station gain <color=green>50%</color> cargo.\n\nAllows the station to stream <color=green>750</color> metal, gas and crystal.",
			"FlavourText": "\"That name doesn't give you pause?\"\nAdmiral Tanee shot Darby a meaningful glance.\n\"On the contrary, feel like I know what I'll be getting. Quite refreshing given some of my previous freighting experiences.\"",
			"ImageID": "3301",
			"Role": "Organization",
			"TierAffinity": [ 3 ],
			"Multiplicity": "StationUnique",
			"SlotAffinity": "Organization",
			"StationType": "Normal",
			"PathDependency": {
				"Path": "Industry",
				"Required": 6
			},
			"LevelCap": 1,
			"Stats": [
				{
					"TargetAttribute": "COST_TIME",
					"UseArray": true,
					"ModifierArray": [ 1867.5 ]
				},
				{
					"TargetAttribute": "COST_MTL",
					"UseArray": true,
					"ModifierArray": [ 45753.75 ]
				},
				{
					"TargetAttribute": "COST_GAS",
					"UseArray": true,
					"ModifierArray": [ 68630.625 ]
				},
				{
					"TargetAttribute": "COST_CRS",
					"UseArray": true,
					"ModifierArray": [ 114384.375 ]
				},
				{
					"TargetAttribute": "STAT_B_HP",
					"UseArray": true,
					"ModifierArray": [ 62250 ]
				},
				{
					"TargetAttribute": "STAT_PROD_SPG",
					"UseArray": true,
					"ModifierArray": [ 101.675 ]
				}
			],
			"Effects": [
				{
					"Origin": "Building",
					"Destination": "Station",
					"Target": "Station",
					"TargetAttribute": "STAT_FREIGHTER_CARGO",
					"Type": "Multiplier",
					"UseArray": true,
					"ModifierArray": [ 0.5 ]
				},
				{
					"Origin": "Building",
					"Destination": "Station",
					"Target": "Station",
					"TargetAttribute": "STREAM_METAL",
					"Type": "Modifier",
					"UseArray": true,
					"ModifierArray": [ 750 ]
				},
				{
					"Origin": "Building",
					"Destination": "Station",
					"Target": "Station",
					"TargetAttribute": "STREAM_GAS",
					"Type": "Modifier",
					"UseArray": true,
					"ModifierArray": [ 750 ]
				},
				{
					"Origin": "Building",
					"Destination": "Station",
					"Target": "Station",
					"TargetAttribute": "STREAM_CRYSTAL",
					"Type": "Modifier",
					"UseArray": true,
					"ModifierArray": [ 750 ]
				}
			]
		},
		{
			"Id": "331",
			"Name": "Prospect Inc.",
			"Description": "The mining colony additionally harvests resource fields (metal, gas and crystal) at <color=green>50%</color> per level per hour.",
			"FullDescription": "The mining colony additionally harvests resource fields (metal, gas and crystal) at <color=green>50%</color> per level per hour.",
			"FlavourText": "\"It's like they're no listenin'! Wasted opportunity, tha's what this is. You know what?  You *hic* know what!? Do it ourselves, that's what we'll do. Start our own prospectin' company!\"\n-- Willy Gamish, Entrepreneur",
			"ImageID": 201,
			"Role": "Organization",
			"TierAffinity": [ 3 ],
			"Multiplicity": "StationUnique",
			"SlotAffinity": "Organization",
			"StationType": "Normal",
			"PathDependency": {
				"Path": "Industry",
				"Required": 6
			},
			"LevelCap": 1,
			"Stats": [
				{
					"TargetAttribute": "COST_TIME",
					"UseArray": true,
					"ModifierArray": [ 1867.5 ]
				},
				{
					"TargetAttribute": "COST_MTL",
					"UseArray": true,
					"ModifierArray": [ 45753.75 ]
				},
				{
					"TargetAttribute": "COST_GAS",
					"UseArray": true,
					"ModifierArray": [ 68630.625 ]
				},
				{
					"TargetAttribute": "COST_CRS",
					"UseArray": true,
					"ModifierArray": [ 114384.375 ]
				},
				{
					"TargetAttribute": "STAT_B_HP",
					"UseArray": true,
					"ModifierArray": [ 62250 ]
				},
				{
					"TargetAttribute": "STAT_PROD_SPG",
					"UseArray": true,
					"ModifierArray": [ 101.675 ]
				}
			],
			"Effects": [
				{
					"Origin": "Building",
					"Destination": "Outpost",
					"Target": "MiningColony",
					"TargetAttribute": "OP_MC_HARVEST_EVERYTHING",
					"Type": "Modifier",
					"UseArray": true,
					"ModifierArray": [ 1 ]
				}
			]
		},
		{
			"Id": 1000,
			"Name": "Military Barracks",
			"Description": "Your fleets operating from this station require <color=green>3</color> less labor per level.",
			"FullDescription": "Your fleets operating from this station require <color=green>3</color> less labor per level.",
			"FlavourText": "\"Training pilots well is expensive but a fleet of well-trained pilots is a treasure.\" \n-- Frontier Legion saying.",
			"ImageID": 30,
			"Role": "Military",
			"TierAffinity": [ 0 ],
			"Multiplicity": "StationUnique",
			"SlotAffinity": "Specialization",
			"StationType": "Normal",
			"LevelCap": 10,
			"Stats": [
				{
					"TargetAttribute": "COST_TIME",
					"UseArray": true,
					"ModifierArray": [ 4.22, 9.84, 19.69, 30.94, 42.19, 54.84, 68.91, 84.38, 106.88, 140.63 ]
				},
				{
					"TargetAttribute": "COST_MTL",
					"UseArray": true,
					"ModifierArray": [ 166.1132813, 387.5976563, 775.1953125, 1218.164063, 1661.132813, 2159.472656, 2713.183594, 3322.265625, 4208.203125, 5537.109375 ]
				},
				{
					"TargetAttribute": "COST_GAS",
					"UseArray": true,
					"ModifierArray": [ 66.4453125, 155.0390625, 310.078125, 487.265625, 664.453125, 863.7890625, 1085.273438, 1328.90625, 1683.28125, 2214.84375 ]
				},
				{
					"TargetAttribute": "COST_CRS",
					"UseArray": true,
					"ModifierArray": [ 99.66796875, 232.5585938, 465.1171875, 730.8984375, 996.6796875, 1295.683594, 1627.910156, 1993.359375, 2524.921875, 3322.265625 ]
				},
				{
					"TargetAttribute": "STAT_B_HP",
					"UseArray": true,
					"ModifierArray": [ 84.38, 281.25, 675, 1293.75, 2137.5, 3234.38, 4612.5, 6300, 8437.5, 11250 ]
				},
				{
					"TargetAttribute": "STAT_PROD_SPG",
					"UseArray": true,
					"ModifierArray": [ 0.13, 0.43, 1.04, 1.98, 3.28, 4.96, 7.07, 9.66, 12.94, 17.25 ]
				}
			],
			"Effects": [
				{
					"Origin": "Building",
					"Destination": "FleetsInRange",
					"Target": "Fleet",
					"TargetAttribute": "COST_UPKEEP_FLAT",
					"Type": "Modifier",
					"UseArray": true,
					"ModifierArray": [ -3, -6, -9, -12, -15, -18, -21, -24, -27, -30 ],
					"Radius": 0,
					"Coverage": "Owner"
				}
			]
		},
		{
			"Id": 1001,
			"Name": "Fleet Docks",
			"Description": "Corvettes and Patrol Ships cost <color=green>3%</color> less time to produce per level.",
			"FullDescription": "Corvettes and Patrol Ships cost <color=green>3%</color> less time to produce per level.",
			"FlavourText": "The production of fighting craft is a great responsibility. If the weapon system is miscalibrated even by a degree, a pilot's life can be forfeited.",
			"ImageID": 26,
			"Role": "Military",
			"TierAffinity": [ 0 ],
			"Multiplicity": "StationUnique",
			"SlotAffinity": "Specialization",
			"StationType": "Normal",
			"LevelCap": 10,
			"Stats": [
				{
					"TargetAttribute": "COST_TIME",
					"UseArray": true,
					"ModifierArray": [ 4.22, 9.84, 19.69, 30.94, 42.19, 54.84, 68.91, 84.38, 106.88, 140.63 ]
				},
				{
					"TargetAttribute": "COST_MTL",
					"UseArray": true,
					"ModifierArray": [ 166.1132813, 387.5976563, 775.1953125, 1218.164063, 1661.132813, 2159.472656, 2713.183594, 3322.265625, 4208.203125, 5537.109375 ]
				},
				{
					"TargetAttribute": "COST_GAS",
					"UseArray": true,
					"ModifierArray": [ 66.4453125, 155.0390625, 310.078125, 487.265625, 664.453125, 863.7890625, 1085.273438, 1328.90625, 1683.28125, 2214.84375 ]
				},
				{
					"TargetAttribute": "COST_CRS",
					"UseArray": true,
					"ModifierArray": [ 99.66796875, 232.5585938, 465.1171875, 730.8984375, 996.6796875, 1295.683594, 1627.910156, 1993.359375, 2524.921875, 3322.265625 ]
				},
				{
					"TargetAttribute": "STAT_B_HP",
					"UseArray": true,
					"ModifierArray": [ 84.38, 281.25, 675, 1293.75, 2137.5, 3234.38, 4612.5, 6300, 8437.5, 11250 ]
				},
				{
					"TargetAttribute": "STAT_PROD_SPG",
					"UseArray": true,
					"ModifierArray": [ 0.13, 0.43, 1.04, 1.98, 3.28, 4.96, 7.07, 9.66, 12.94, 17.25 ]
				}
			],
			"Effects": [
				{
					"Origin": "Building",
					"Destination": "Station",
					"Target": "LightCombatShips",
					"TargetAttribute": "COST_TIME",
					"Type": "Multiplier",
					"UseArray": true,
					"ModifierArray": [ -0.03, -0.06, -0.09, -0.12, -0.15, -0.18, -0.21, -0.24, -0.27, -0.3 ]
				}
			]
		},
		{
			"Id": 1002,
			"Name": "Department of Acquisitions",
			"Description": "Corvette, Patrol Ship, Destroyer and Frigate fleets raiding from this station gain <color=green>5%</color> cargo and <color=green>2%</color> plunder per level.",
			"FullDescription": "Corvette, Patrol Ship, Destroyer and Frigate fleets raiding from this station gain <color=green>5%</color> cargo and <color=green>2%</color> plunder per level.\n\nYour armada's average plunder value lowers the amount of resources hidden by a defender's Container Port building.",
			"FlavourText": "For reasons unknown, the PR department rejected the name \"Department of Piracy\".",
			"ImageID": 41,
			"Role": "Military",
			"TierAffinity": [ 0 ],
			"Multiplicity": "StationUnique",
			"SlotAffinity": "Specialization",
			"StationType": "Normal",
			"LevelCap": 10,
			"Stats": [
				{
					"TargetAttribute": "COST_TIME",
					"UseArray": true,
					"ModifierArray": [ 4.22, 9.84, 19.69, 30.94, 42.19, 54.84, 68.91, 84.38, 106.88, 140.63 ]
				},
				{
					"TargetAttribute": "COST_MTL",
					"UseArray": true,
					"ModifierArray": [ 166.1132813, 387.5976563, 775.1953125, 1218.164063, 1661.132813, 2159.472656, 2713.183594, 3322.265625, 4208.203125, 5537.109375 ]
				},
				{
					"TargetAttribute": "COST_GAS",
					"UseArray": true,
					"ModifierArray": [ 66.4453125, 155.0390625, 310.078125, 487.265625, 664.453125, 863.7890625, 1085.273438, 1328.90625, 1683.28125, 2214.84375 ]
				},
				{
					"TargetAttribute": "COST_CRS",
					"UseArray": true,
					"ModifierArray": [ 99.66796875, 232.5585938, 465.1171875, 730.8984375, 996.6796875, 1295.683594, 1627.910156, 1993.359375, 2524.921875, 3322.265625 ]
				},
				{
					"TargetAttribute": "STAT_B_HP",
					"UseArray": true,
					"ModifierArray": [ 84.38, 281.25, 675, 1293.75, 2137.5, 3234.38, 4612.5, 6300, 8437.5, 11250 ]
				},
				{
					"TargetAttribute": "STAT_PROD_SPG",
					"UseArray": true,
					"ModifierArray": [ 0.13, 0.43, 1.04, 1.98, 3.28, 4.96, 7.07, 9.66, 12.94, 17.25 ]
				}
			],
			"Effects": [
				{
					"Origin": "Building",
					"Destination": "FleetsInRange",
					"Target": "LightAndHeavyCombatShips",
					"TargetAttribute": "UNIT_CARGO",
					"Type": "Multiplier",
					"UseArray": true,
					"ModifierArray": [ 0.05, 0.1, 0.15, 0.2, 0.25, 0.3, 0.35, 0.4, 0.45, 0.5 ],
					"Conditions": [
						{
							"$type": "OperationCondition",
							"AcceptedTypes": [ "Raid" ]
						}
					],
					"Radius": 0,
					"Coverage": "Owner"
				},
				{
					"Origin": "Building",
					"Destination": "FleetsInRange",
					"Target": "LightAndHeavyCombatShips",
					"TargetAttribute": "UNIT_PLUNDER",
					"Type": "Modifier",
					"UseArray": true,
					"ModifierArray": [ 0.02, 0.04, 0.06, 0.08, 0.1, 0.12, 0.14, 0.16, 0.18, 0.2 ],
					"Radius": 0,
					"Coverage": "Owner"
				}
			]
		},
		{
			"Id": 1100,
			"Name": "Docking Services",
			"Description": "Increases the station's fleet operating limit by <color=green>2</color> per level.",
			"FullDescription": "Increases the station's fleet operating limit by <color=green>2</color> per level.",
			"FlavourText": "You would think with all the money spent on this installation you would have a system that LOCATES MY DAMN LUGGAGE!",
			"ImageID": 39,
			"Role": "Military",
			"TierAffinity": [ 1 ],
			"Multiplicity": "StationUnique",
			"SlotAffinity": "Specialization",
			"StationType": "Normal",
			"LevelCap": 10,
			"Stats": [
				{
					"TargetAttribute": "COST_TIME",
					"UseArray": true,
					"ModifierArray": [ 15, 31.88, 51.38, 76.88, 110.25, 146.25, 184.88, 232.5, 291, 360 ]
				},
				{
					"TargetAttribute": "COST_MTL",
					"UseArray": true,
					"ModifierArray": [ 623.4375, 1324.804688, 2135.273438, 3195.117188, 4582.265625, 6078.515625, 7683.867188, 9663.28125, 12094.6875, 14962.5 ]
				},
				{
					"TargetAttribute": "COST_GAS",
					"UseArray": true,
					"ModifierArray": [ 249.375, 529.921875, 854.109375, 1278.046875, 1832.90625, 2431.40625, 3073.546875, 3865.3125, 4837.875, 5985 ]
				},
				{
					"TargetAttribute": "COST_CRS",
					"UseArray": true,
					"ModifierArray": [ 374.0625, 794.8828125, 1281.164063, 1917.070313, 2749.359375, 3647.109375, 4610.320313, 5797.96875, 7256.8125, 8977.5 ]
				},
				{
					"TargetAttribute": "STAT_B_HP",
					"UseArray": true,
					"ModifierArray": [ 300, 937.5, 1965, 3502.5, 5707.5, 8632.5, 12330, 16980, 22800, 30000 ]
				},
				{
					"TargetAttribute": "STAT_PROD_SPG",
					"UseArray": true,
					"ModifierArray": [ 0.46, 1.44, 3.01, 5.37, 8.75, 13.24, 18.91, 26.04, 34.96, 46 ]
				}
			],
			"Effects": [
				{
					"Origin": "Building",
					"Destination": "Station",
					"Target": "Station",
					"TargetAttribute": "STAT_OCT",
					"Type": "Modifier",
					"UseArray": true,
					"ModifierArray": [ 2, 4, 6, 8, 10, 12, 14, 16, 18, 20 ]
				}
			]
		},
		{
			"Id": 1101,
			"Name": "Military Hangars",
			"Description": "Protects the station's hangared units from attacks by hiding <color=green>1000</color> units of each ship type in its hangars per level.",
			"FullDescription": "Protects the station's hangared units from attacks by hiding <color=green>1000</color> units of each ship type in its hangars per level.\n\nHidden units do not show up on espionage reports and can not be targeted by attackers.",
			"FlavourText": "Warning!\nMilitary installation!\nNo entry without permission on penalty of death!",
			"ImageID": 2,
			"Role": "Military",
			"TierAffinity": [ 1 ],
			"Multiplicity": "StationUnique",
			"SlotAffinity": "Specialization",
			"StationType": "Normal",
			"LevelCap": 10,
			"Stats": [
				{
					"TargetAttribute": "COST_TIME",
					"UseArray": true,
					"ModifierArray": [ 15, 31.88, 51.38, 76.88, 110.25, 146.25, 184.88, 232.5, 291, 360 ]
				},
				{
					"TargetAttribute": "COST_MTL",
					"UseArray": true,
					"ModifierArray": [ 623.4375, 1324.804688, 2135.273438, 3195.117188, 4582.265625, 6078.515625, 7683.867188, 9663.28125, 12094.6875, 14962.5 ]
				},
				{
					"TargetAttribute": "COST_GAS",
					"UseArray": true,
					"ModifierArray": [ 249.375, 529.921875, 854.109375, 1278.046875, 1832.90625, 2431.40625, 3073.546875, 3865.3125, 4837.875, 5985 ]
				},
				{
					"TargetAttribute": "COST_CRS",
					"UseArray": true,
					"ModifierArray": [ 374.0625, 794.8828125, 1281.164063, 1917.070313, 2749.359375, 3647.109375, 4610.320313, 5797.96875, 7256.8125, 8977.5 ]
				},
				{
					"TargetAttribute": "STAT_B_HP",
					"UseArray": true,
					"ModifierArray": [ 300, 937.5, 1965, 3502.5, 5707.5, 8632.5, 12330, 16980, 22800, 30000 ]
				},
				{
					"TargetAttribute": "STAT_PROD_SPG",
					"UseArray": true,
					"ModifierArray": [ 0.46, 1.44, 3.01, 5.37, 8.75, 13.24, 18.91, 26.04, 34.96, 46 ]
				}
			],
			"Effects": [
				{
					"Origin": "Building",
					"Destination": "Station",
					"Target": "Station",
					"TargetAttribute": "STAT_HANGAR_HIDDEN_SHIPS_PER_UNIT",
					"Type": "Modifier",
					"UseArray": true,
					"ModifierArray": [ 1000, 2000, 3000, 4000, 5000, 6000, 7000, 8000, 9000, 10000 ]
				}
			]
		},
		{
			"Id": 1102,
			"Name": "Cadet School",
			"Description": "Supplied Corvette and Patrol Ship fleets get <color=green>0.8</color> firepower and <color=green>4</color> hit points per level.",
			"FullDescription": "Supplied Corvette and Patrol Ship fleets get <color=green>0.8</color> firepower and <color=green>4</color> hit points per level.",
			"FlavourText": "The backbone of many command structures is comprised of eager fleet cadets trying to earn extra points.",
			"ImageID": 24,
			"Role": "Military",
			"TierAffinity": [ 1 ],
			"Multiplicity": "StationUnique",
			"SlotAffinity": "Specialization",
			"StationType": "Normal",
			"LevelCap": 10,
			"Stats": [
				{
					"TargetAttribute": "COST_TIME",
					"UseArray": true,
					"ModifierArray": [ 15, 31.88, 51.38, 76.88, 110.25, 146.25, 184.88, 232.5, 291, 360 ]
				},
				{
					"TargetAttribute": "COST_MTL",
					"UseArray": true,
					"ModifierArray": [ 623.4375, 1324.804688, 2135.273438, 3195.117188, 4582.265625, 6078.515625, 7683.867188, 9663.28125, 12094.6875, 14962.5 ]
				},
				{
					"TargetAttribute": "COST_GAS",
					"UseArray": true,
					"ModifierArray": [ 249.375, 529.921875, 854.109375, 1278.046875, 1832.90625, 2431.40625, 3073.546875, 3865.3125, 4837.875, 5985 ]
				},
				{
					"TargetAttribute": "COST_CRS",
					"UseArray": true,
					"ModifierArray": [ 374.0625, 794.8828125, 1281.164063, 1917.070313, 2749.359375, 3647.109375, 4610.320313, 5797.96875, 7256.8125, 8977.5 ]
				},
				{
					"TargetAttribute": "STAT_B_HP",
					"UseArray": true,
					"ModifierArray": [ 300, 937.5, 1965, 3502.5, 5707.5, 8632.5, 12330, 16980, 22800, 30000 ]
				},
				{
					"TargetAttribute": "STAT_PROD_SPG",
					"UseArray": true,
					"ModifierArray": [ 0.46, 1.44, 3.01, 5.37, 8.75, 13.24, 18.91, 26.04, 34.96, 46 ]
				}
			],
			"Effects": [
				{
					"Origin": "Building",
					"Destination": "Fleets",
					"Target": "LightCombatShips",
					"TargetAttribute": "UNIT_FIREPOWER",
					"Type": "Modifier",
					"UseArray": true,
					"ModifierArray": [ 0.8, 1.6, 2.4, 3.2, 4, 4.8, 5.6, 6.4, 7.2, 8 ]
				},
				{
					"Origin": "Building",
					"Destination": "Fleets",
					"Target": "LightCombatShips",
					"TargetAttribute": "UNIT_HP",
					"Type": "Modifier",
					"UseArray": true,
					"ModifierArray": [ 4, 8, 12, 16, 20, 24, 28, 32, 36, 40 ]
				}
			]
		},
		{
			"Id": 1200,
			"Name": "Barricades",
			"Description": "Increases the hit points of all buildings by <color=green>2%</color> per level.\nIncreases the station's capture defense by <color=green>4</color> per level.",
			"FullDescription": "Increases the hit points of all buildings by <color=green>2%</color> per level.\nIncreases the station's capture defense by <color=green>4</color> per level.",
			"FlavourText": "Back in my day we didn't need barricades to deter attacks, we had the armed garrison. Now THOSE guys were a deterrence!",
			"ImageID": 19,
			"Role": "Military",
			"TierAffinity": [ 2 ],
			"Multiplicity": "StationUnique",
			"SlotAffinity": "Specialization",
			"StationType": "Normal",
			"LevelCap": 10,
			"Stats": [
				{
					"TargetAttribute": "COST_TIME",
					"UseArray": true,
					"ModifierArray": [ 24.75, 52.88, 85.5, 123.75, 165.38, 216, 276.75, 353.25, 434.25, 517.5 ]
				},
				{
					"TargetAttribute": "COST_MTL",
					"UseArray": true,
					"ModifierArray": [ 1082.8125, 2313.28125, 3740.625, 5414.0625, 7235.15625, 9450, 12107.8125, 15454.6875, 18998.4375, 22640.625 ]
				},
				{
					"TargetAttribute": "COST_GAS",
					"UseArray": true,
					"ModifierArray": [ 433.125, 925.3125, 1496.25, 2165.625, 2894.0625, 3780, 4843.125, 6181.875, 7599.375, 9056.25 ]
				},
				{
					"TargetAttribute": "COST_CRS",
					"UseArray": true,
					"ModifierArray": [ 649.6875, 1387.96875, 2244.375, 3248.4375, 4341.09375, 5670, 7264.6875, 9272.8125, 11399.0625, 13584.375 ]
				},
				{
					"TargetAttribute": "STAT_B_HP",
					"UseArray": true,
					"ModifierArray": [ 495, 1552.5, 3262.5, 5737.5, 9045, 13365, 18900, 25965, 34650, 45000 ]
				},
				{
					"TargetAttribute": "STAT_PROD_SPG",
					"UseArray": true,
					"ModifierArray": [ 0.76, 2.38, 5, 8.8, 13.87, 20.49, 28.98, 39.81, 53.13, 69 ]
				}
			],
			"Effects": [
				{
					"Origin": "Building",
					"Destination": "Station",
					"Target": "Station",
					"TargetAttribute": "STAT_B_HP",
					"Type": "PercentageModifier",
					"UseArray": true,
					"ModifierArray": [ 0.02, 0.04, 0.06, 0.08, 0.1, 0.12, 0.14, 0.16, 0.18, 0.2 ]
				},
				{
					"Origin": "Building",
					"Destination": "Station",
					"Target": "Station",
					"TargetAttribute": "STAT_CAPTURE_DEFENSE",
					"Type": "Modifier",
					"UseArray": true,
					"ModifierArray": [ 4, 8, 12, 16, 20, 24, 28, 32, 36, 40 ]
				}
			]
		},
		{
			"Id": 1201,
			"Name": "Sector Command",
			"Description": "Increases the maximum tactical firepower bonus for this station by <color=green>0.5%</color> per level.",
			"FullDescription": "Increases the maximum tactical firepower bonus for this station by <color=green>0.5%</color> per level.",
			"FlavourText": "The Sector Command is equipped with specialized analytical systems that feed additional information into the tactical computer systems of their fleets.",
			"ImageID": 27,
			"Role": "Military",
			"TierAffinity": [ 2 ],
			"Multiplicity": "StationUnique",
			"SlotAffinity": "Specialization",
			"StationType": "Normal",
			"LevelCap": 10,
			"Stats": [
				{
					"TargetAttribute": "COST_TIME",
					"UseArray": true,
					"ModifierArray": [ 24.75, 52.88, 85.5, 123.75, 165.38, 216, 276.75, 353.25, 434.25, 517.5 ]
				},
				{
					"TargetAttribute": "COST_MTL",
					"UseArray": true,
					"ModifierArray": [ 1082.8125, 2313.28125, 3740.625, 5414.0625, 7235.15625, 9450, 12107.8125, 15454.6875, 18998.4375, 22640.625 ]
				},
				{
					"TargetAttribute": "COST_GAS",
					"UseArray": true,
					"ModifierArray": [ 433.125, 925.3125, 1496.25, 2165.625, 2894.0625, 3780, 4843.125, 6181.875, 7599.375, 9056.25 ]
				},
				{
					"TargetAttribute": "COST_CRS",
					"UseArray": true,
					"ModifierArray": [ 649.6875, 1387.96875, 2244.375, 3248.4375, 4341.09375, 5670, 7264.6875, 9272.8125, 11399.0625, 13584.375 ]
				},
				{
					"TargetAttribute": "STAT_B_HP",
					"UseArray": true,
					"ModifierArray": [ 495, 1552.5, 3262.5, 5737.5, 9045, 13365, 18900, 25965, 34650, 45000 ]
				},
				{
					"TargetAttribute": "STAT_PROD_SPG",
					"UseArray": true,
					"ModifierArray": [ 0.76, 2.38, 5, 8.8, 13.87, 20.49, 28.98, 39.81, 53.13, 69 ]
				}
			],
			"Effects": [
				{
					"Origin": "Building",
					"Destination": "Station",
					"Target": "Station",
					"TargetAttribute": "STAT_TACTIC_BOOST_CAP",
					"Type": "Modifier",
					"UseArray": true,
					"ModifierArray": [ 0.005, 0.01, 0.015, 0.02, 0.025, 0.03, 0.035, 0.04, 0.045, 0.05 ]
				}
			]
		},
		{
			"Id": 1202,
			"Name": "Navy Academy",
			"Description": "Supplied Destroyer and Frigate fleets get <color=green>4</color> firepower and <color=green>10</color> hit points per level.",
			"FullDescription": "Supplied Destroyer and Frigate fleets get <color=green>4</color> firepower and <color=green>10</color> hit points per level.",
			"FlavourText": "A well oiled war-machine not only needs command staff and cadets, but also capable engineers, gunnery officers and many other specialists.",
			"ImageID": 28,
			"Role": "Military",
			"TierAffinity": [ 2 ],
			"Multiplicity": "StationUnique",
			"SlotAffinity": "Specialization",
			"StationType": "Normal",
			"LevelCap": 10,
			"Stats": [
				{
					"TargetAttribute": "COST_TIME",
					"UseArray": true,
					"ModifierArray": [ 24.75, 52.88, 85.5, 123.75, 165.38, 216, 276.75, 353.25, 434.25, 517.5 ]
				},
				{
					"TargetAttribute": "COST_MTL",
					"UseArray": true,
					"ModifierArray": [ 1082.8125, 2313.28125, 3740.625, 5414.0625, 7235.15625, 9450, 12107.8125, 15454.6875, 18998.4375, 22640.625 ]
				},
				{
					"TargetAttribute": "COST_GAS",
					"UseArray": true,
					"ModifierArray": [ 433.125, 925.3125, 1496.25, 2165.625, 2894.0625, 3780, 4843.125, 6181.875, 7599.375, 9056.25 ]
				},
				{
					"TargetAttribute": "COST_CRS",
					"UseArray": true,
					"ModifierArray": [ 649.6875, 1387.96875, 2244.375, 3248.4375, 4341.09375, 5670, 7264.6875, 9272.8125, 11399.0625, 13584.375 ]
				},
				{
					"TargetAttribute": "STAT_B_HP",
					"UseArray": true,
					"ModifierArray": [ 495, 1552.5, 3262.5, 5737.5, 9045, 13365, 18900, 25965, 34650, 45000 ]
				},
				{
					"TargetAttribute": "STAT_PROD_SPG",
					"UseArray": true,
					"ModifierArray": [ 0.76, 2.38, 5, 8.8, 13.87, 20.49, 28.98, 39.81, 53.13, 69 ]
				}
			],
			"Effects": [
				{
					"Origin": "Building",
					"Destination": "Fleets",
					"Target": "HeavyCombatShips",
					"TargetAttribute": "UNIT_FIREPOWER",
					"Type": "Modifier",
					"UseArray": true,
					"ModifierArray": [ 4, 8, 12, 16, 20, 24, 28, 32, 36, 40 ]
				},
				{
					"Origin": "Building",
					"Destination": "Fleets",
					"Target": "HeavyCombatShips",
					"TargetAttribute": "UNIT_HP",
					"Type": "Modifier",
					"UseArray": true,
					"ModifierArray": [ 10, 20, 30, 40, 50, 60, 70, 80, 90, 100 ]
				}
			]
		},
		{
			"Id": 1300,
			"Name": "Campaign Directorate",
			"Description": "Operating <color=green>[ light | heavy | capital ]</color> fleets gain <color=green>[ 0.8 | 4 | 20 ]</color> firepower and <color=green>[ 4| 20 | 100 ]</color> hit points per level.",
			"FullDescription": "Operating [ light | heavy | capital ] fleets gain <color=green>[ 0.8 | 4 | 20 ]</color> firepower and <color=green>[ 4| 20 | 100 ]</color> hit points per level.",
			"FlavourText": "A good captain can create a capable crew from average men. A good commodore turns a capable crew into a fine fleet. And from fine fleets a good admiral constructs a song-worthy armada.\n-- Legatus Bernard Moreau",
			"ImageID": 42,
			"Role": "Military",
			"TierAffinity": [ 3 ],
			"Multiplicity": "StationUnique",
			"SlotAffinity": "Specialization",
			"StationType": "Normal",
			"LevelCap": 10,
			"Stats": [
				{
					"TargetAttribute": "COST_TIME",
					"UseArray": true,
					"ModifierArray": [ 45, 93, 144, 198, 255, 315, 378, 447, 522, 603 ]
				},
				{
					"TargetAttribute": "COST_MTL",
					"UseArray": true,
					"ModifierArray": [ 2067.1875, 4272.1875, 6615, 9095.625, 11714.0625, 14470.3125, 17364.375, 20534.0625, 23979.375, 27700.3125 ]
				},
				{
					"TargetAttribute": "COST_GAS",
					"UseArray": true,
					"ModifierArray": [ 826.875, 1708.875, 2646, 3638.25, 4685.625, 5788.125, 6945.75, 8213.625, 9591.75, 11080.125 ]
				},
				{
					"TargetAttribute": "COST_CRS",
					"UseArray": true,
					"ModifierArray": [ 1240.3125, 2563.3125, 3969, 5457.375, 7028.4375, 8682.1875, 10418.625, 12320.4375, 14387.625, 16620.1875 ]
				},
				{
					"TargetAttribute": "STAT_B_HP",
					"UseArray": true,
					"ModifierArray": [ 900, 2760, 5640, 9600, 14700, 21000, 28560, 37500, 47940, 60000 ]
				},
				{
					"TargetAttribute": "STAT_PROD_SPG",
					"UseArray": true,
					"ModifierArray": [ 1.38, 4.23, 8.65, 14.72, 22.54, 32.2, 43.79, 57.5, 73.51, 92 ]
				}
			],
			"Effects": [
				{
					"Origin": "Building",
					"Destination": "FleetsInRange",
					"Target": "SmallShips",
					"TargetAttribute": "UNIT_FIREPOWER",
					"Type": "Modifier",
					"UseArray": true,
					"ModifierArray": [ 0.8, 1.6, 2.4, 3.2, 4, 4.8, 5.6, 6.4, 7.2, 8 ],
					"Radius": 0,
					"Coverage": "Allies"
				},
				{
					"Origin": "Building",
					"Destination": "FleetsInRange",
					"Target": "SmallShips",
					"TargetAttribute": "UNIT_HP",
					"Type": "Modifier",
					"UseArray": true,
					"ModifierArray": [ 4, 8, 12, 16, 20, 24, 28, 32, 36, 40 ],
					"Radius": 0,
					"Coverage": "Allies"
				},
				{
					"Origin": "Building",
					"Destination": "FleetsInRange",
					"Target": "LargeShips",
					"TargetAttribute": "UNIT_FIREPOWER",
					"Type": "Modifier",
					"UseArray": true,
					"ModifierArray": [ 4, 8, 12, 16, 20, 24, 28, 32, 36, 40 ],
					"Radius": 0,
					"Coverage": "Allies"
				},
				{
					"Origin": "Building",
					"Destination": "FleetsInRange",
					"Target": "LargeShips",
					"TargetAttribute": "UNIT_HP",
					"Type": "Modifier",
					"UseArray": true,
					"ModifierArray": [ 20, 40, 60, 80, 100, 120, 140, 160, 180, 200 ],
					"Radius": 0,
					"Coverage": "Allies"
				},
				{
					"Origin": "Building",
					"Destination": "FleetsInRange",
					"Target": "CapitalShips",
					"TargetAttribute": "UNIT_FIREPOWER",
					"Type": "Modifier",
					"UseArray": true,
					"ModifierArray": [ 20, 40, 60, 80, 100, 120, 140, 160, 180, 200 ],
					"Radius": 0,
					"Coverage": "Allies"
				},
				{
					"Origin": "Building",
					"Destination": "FleetsInRange",
					"Target": "CapitalShips",
					"TargetAttribute": "UNIT_HP",
					"Type": "Modifier",
					"UseArray": true,
					"ModifierArray": [ 100, 200, 300, 400, 500, 600, 700, 800, 900, 1000 ],
					"Radius": 0,
					"Coverage": "Allies"
				}
			]
		},
		{
			"Id": 1301,
			"Name": "War Council",
			"Description": "Supplied Dreadnought fleets gain <color=green>2</color> station bombing and <color=green>36</color> firepower per level.\n\nSupplied Carrier fleets gain <color=green>40</color> firepower and <color=green>100</color> hit points per level.",
			"FullDescription": "Supplied Dreadnought fleets gain <color=green>2</color> station bombing and <color=green>36</color> firepower per level.\n\nSupplied Carrier fleets gain <color=green>40</color> firepower and <color=green>100</color> hit points per level.\n\nSupplied Gunship fleets gain <color=green>10</color> hit points and <color=green>8</color> station bombing per level.",
			"FlavourText": "Originally a XAOC tradition, the War Councils allowed commanders, chiefs and Anarchs of different XAOC houses to share military expertise without hierarchy and were a key factor in their rise to prominence.",
			"ImageID": 23,
			"Role": "Military",
			"TierAffinity": [ 3 ],
			"Multiplicity": "StationUnique",
			"SlotAffinity": "Specialization",
			"StationType": "Normal",
			"LevelCap": 10,
			"Stats": [
				{
					"TargetAttribute": "COST_TIME",
					"UseArray": true,
					"ModifierArray": [ 45, 93, 144, 198, 255, 315, 378, 447, 522, 603 ]
				},
				{
					"TargetAttribute": "COST_MTL",
					"UseArray": true,
					"ModifierArray": [ 2067.1875, 4272.1875, 6615, 9095.625, 11714.0625, 14470.3125, 17364.375, 20534.0625, 23979.375, 27700.3125 ]
				},
				{
					"TargetAttribute": "COST_GAS",
					"UseArray": true,
					"ModifierArray": [ 826.875, 1708.875, 2646, 3638.25, 4685.625, 5788.125, 6945.75, 8213.625, 9591.75, 11080.125 ]
				},
				{
					"TargetAttribute": "COST_CRS",
					"UseArray": true,
					"ModifierArray": [ 1240.3125, 2563.3125, 3969, 5457.375, 7028.4375, 8682.1875, 10418.625, 12320.4375, 14387.625, 16620.1875 ]
				},
				{
					"TargetAttribute": "STAT_B_HP",
					"UseArray": true,
					"ModifierArray": [ 900, 2760, 5640, 9600, 14700, 21000, 28560, 37500, 47940, 60000 ]
				},
				{
					"TargetAttribute": "STAT_PROD_SPG",
					"UseArray": true,
					"ModifierArray": [ 1.38, 4.23, 8.65, 14.72, 22.54, 32.2, 43.79, 57.5, 73.51, 92 ]
				}
			],
			"Effects": [
				{
					"Origin": "Building",
					"Destination": "Fleets",
					"Target": "Dreadnought",
					"TargetAttribute": "UNIT_FIREPOWER",
					"Type": "Modifier",
					"UseArray": true,
					"ModifierArray": [ 36, 72, 108, 144, 180, 216, 252, 288, 324, 360 ]
				},
				{
					"Origin": "Building",
					"Destination": "Fleets",
					"Target": "Dreadnought",
					"TargetAttribute": "UNIT_BOMB",
					"Type": "Modifier",
					"UseArray": true,
					"ModifierArray": [ 2, 4, 6, 8, 10, 12, 14, 16, 18, 20 ]
				},
				{
					"Origin": "Building",
					"Destination": "Fleets",
					"Target": "Carrier",
					"TargetAttribute": "UNIT_FIREPOWER",
					"Type": "Modifier",
					"UseArray": true,
					"ModifierArray": [ 40, 80, 120, 160, 200, 240, 280, 320, 360, 400 ]
				},
				{
					"Origin": "Building",
					"Destination": "Fleets",
					"Target": "Carrier",
					"TargetAttribute": "UNIT_HP",
					"Type": "Modifier",
					"UseArray": true,
					"ModifierArray": [ 100, 200, 300, 400, 500, 600, 700, 800, 900, 1000 ]
				},
				{
					"Origin": "Building",
					"Destination": "Fleets",
					"Target": "Bomber",
					"TargetAttribute": "UNIT_BOMB",
					"Type": "Modifier",
					"UseArray": true,
					"ModifierArray": [ 8, 16, 24, 32, 40, 48, 56, 64, 72, 80 ]
				},
				{
					"Origin": "Building",
					"Destination": "Fleets",
					"Target": "Bomber",
					"TargetAttribute": "UNIT_HP",
					"Type": "Modifier",
					"UseArray": true,
					"ModifierArray": [ 10, 20, 30, 40, 50, 60, 70, 80, 90, 100 ]
				}
			]
		},
		{
			"Id": 1302,
			"Name": "MIC Offices",
			"Description": "Heavy and capital units cost <color=green>2%</color> less time to produce per level.",
			"FullDescription": "Heavy and capital units cost <color=green>2%</color> less time to produce per level.",
			"FlavourText": "You know dark times are a-coming when the military, the government and the industry join up in a venture whose cost is only recouperated through warfare.",
			"ImageID": 44,
			"Role": "Military",
			"TierAffinity": [ 3 ],
			"Multiplicity": "StationUnique",
			"SlotAffinity": "Specialization",
			"StationType": "Normal",
			"LevelCap": 10,
			"Stats": [
				{
					"TargetAttribute": "COST_TIME",
					"UseArray": true,
					"ModifierArray": [ 45, 93, 144, 198, 255, 315, 378, 447, 522, 603 ]
				},
				{
					"TargetAttribute": "COST_MTL",
					"UseArray": true,
					"ModifierArray": [ 2067.1875, 4272.1875, 6615, 9095.625, 11714.0625, 14470.3125, 17364.375, 20534.0625, 23979.375, 27700.3125 ]
				},
				{
					"TargetAttribute": "COST_GAS",
					"UseArray": true,
					"ModifierArray": [ 826.875, 1708.875, 2646, 3638.25, 4685.625, 5788.125, 6945.75, 8213.625, 9591.75, 11080.125 ]
				},
				{
					"TargetAttribute": "COST_CRS",
					"UseArray": true,
					"ModifierArray": [ 1240.3125, 2563.3125, 3969, 5457.375, 7028.4375, 8682.1875, 10418.625, 12320.4375, 14387.625, 16620.1875 ]
				},
				{
					"TargetAttribute": "STAT_B_HP",
					"UseArray": true,
					"ModifierArray": [ 900, 2760, 5640, 9600, 14700, 21000, 28560, 37500, 47940, 60000 ]
				},
				{
					"TargetAttribute": "STAT_PROD_SPG",
					"UseArray": true,
					"ModifierArray": [ 1.38, 4.23, 8.65, 14.72, 22.54, 32.2, 43.79, 57.5, 73.51, 92 ]
				}
			],
			"Effects": [
				{
					"Origin": "Building",
					"Destination": "Station",
					"Target": "LargeShips",
					"TargetAttribute": "COST_TIME",
					"Type": "PercentageModifier",
					"UseArray": true,
					"ModifierArray": [ -0.02, -0.04, -0.06, -0.08, -0.1, -0.12, -0.14, -0.16, -0.18, -0.2 ]
				},
				{
					"Origin": "Building",
					"Destination": "Station",
					"Target": "CapitalShips",
					"TargetAttribute": "COST_TIME",
					"Type": "PercentageModifier",
					"UseArray": true,
					"ModifierArray": [ -0.02, -0.04, -0.06, -0.08, -0.1, -0.12, -0.14, -0.16, -0.18, -0.2 ]
				}
			]
		},
		{
			"Id": 2000,
			"Name": "Search and Rescue HQ",
			"Description": "Lowers the mission requirements for fleets running missions from this station by <color=green>1%</color> per level.\n\nFleets gain <color=green>3%</color> speed per level while on Mission movements. ",
			"FullDescription": "Lowers the mission requirements for fleets running missions from this station by <color=green>1%</color> per level.\n\nFleets gain <color=green>3%</color> speed per level while on Mission movements. ",
			"FlavourText": "Sovereignty of space means responsibilities. Upholding order, suppressing piracy and dealing with disasters. Empires are nothing without their subjects, they must protect them.",
			"ImageID": "12",
			"Role": "Domain",
			"TierAffinity": [ 0 ],
			"Multiplicity": "StationUnique",
			"SlotAffinity": "Specialization",
			"StationType": "Normal",
			"LevelCap": 10,
			"Stats": [
				{
					"TargetAttribute": "COST_TIME",
					"UseArray": true,
					"ModifierArray": [ 4.22, 9.84, 19.69, 30.94, 42.19, 54.84, 68.91, 84.38, 106.88, 140.63 ]
				},
				{
					"TargetAttribute": "COST_MTL",
					"UseArray": true,
					"ModifierArray": [ 99.66796875, 232.5585938, 465.1171875, 730.8984375, 996.6796875, 1295.683594, 1627.910156, 1993.359375, 2524.921875, 3322.265625 ]
				},
				{
					"TargetAttribute": "COST_GAS",
					"UseArray": true,
					"ModifierArray": [ 166.1132813, 387.5976563, 775.1953125, 1218.164063, 1661.132813, 2159.472656, 2713.183594, 3322.265625, 4208.203125, 5537.109375 ]
				},
				{
					"TargetAttribute": "COST_CRS",
					"UseArray": true,
					"ModifierArray": [ 66.4453125, 155.0390625, 310.078125, 487.265625, 664.453125, 863.7890625, 1085.273438, 1328.90625, 1683.28125, 2214.84375 ]
				},
				{
					"TargetAttribute": "STAT_B_HP",
					"UseArray": true,
					"ModifierArray": [ 84.38, 281.25, 675, 1293.75, 2137.5, 3234.38, 4612.5, 6300, 8437.5, 11250 ]
				},
				{
					"TargetAttribute": "STAT_PROD_SPG",
					"UseArray": true,
					"ModifierArray": [ 0.13, 0.43, 1.04, 1.98, 3.28, 4.96, 7.07, 9.66, 12.94, 17.25 ]
				}
			],
			"Effects": [
				{
					"Origin": "Building",
					"Destination": "Station",
					"Target": "Station",
					"TargetAttribute": "GE_MISSION_RECOMMENDED_TOTAL_MODIFIER",
					"Type": "Modifier",
					"UseArray": true,
					"ModifierArray": [ -0.01, -0.02, -0.03, -0.04, -0.05, -0.06, -0.07, -0.08, -0.09, -0.1 ],
					"Radius": 0,
					"Coverage": "Owner"
				},
				{
					"Origin": "Building",
					"Destination": "FleetsInRange",
					"Target": "Fleet",
					"TargetAttribute": "UNIT_SPD",
					"Type": "Multiplier",
					"UseArray": true,
					"ModifierArray": [ 0.03, 0.06, 0.09, 0.12, 0.15, 0.18, 0.21, 0.24, 0.27, 0.3 ],
					"Conditions": [
						{
							"$type": "OperationCondition",
							"AcceptedTypes": [ "CompleteMission" ]
						}
					]
				}
			]
		},
		{
			"Id": 2001,
			"Name": "Implant Clinic",
			"Description": "Supplied Scouts and Recon fleets gain <color=green>2</color> speed per level while on Scan movements.",
			"FullDescription": "Supplied Scouts and Recon fleets gain <color=green>2</color> speed per level while on Scan movements.",
			"FlavourText": "Neurolink augmentations increase information processing well beyond biological capabilities but often at the price of a loss of empathy and emotion. A loss of humanity.",
			"ImageID": "8",
			"Role": "Domain",
			"TierAffinity": [ 0 ],
			"Multiplicity": "StationUnique",
			"SlotAffinity": "Specialization",
			"StationType": "Normal",
			"LevelCap": 10,
			"Stats": [
				{
					"TargetAttribute": "COST_TIME",
					"UseArray": true,
					"ModifierArray": [ 4.22, 9.84, 19.69, 30.94, 42.19, 54.84, 68.91, 84.38, 106.88, 140.63 ]
				},
				{
					"TargetAttribute": "COST_MTL",
					"UseArray": true,
					"ModifierArray": [ 99.66796875, 232.5585938, 465.1171875, 730.8984375, 996.6796875, 1295.683594, 1627.910156, 1993.359375, 2524.921875, 3322.265625 ]
				},
				{
					"TargetAttribute": "COST_GAS",
					"UseArray": true,
					"ModifierArray": [ 166.1132813, 387.5976563, 775.1953125, 1218.164063, 1661.132813, 2159.472656, 2713.183594, 3322.265625, 4208.203125, 5537.109375 ]
				},
				{
					"TargetAttribute": "COST_CRS",
					"UseArray": true,
					"ModifierArray": [ 66.4453125, 155.0390625, 310.078125, 487.265625, 664.453125, 863.7890625, 1085.273438, 1328.90625, 1683.28125, 2214.84375 ]
				},
				{
					"TargetAttribute": "STAT_B_HP",
					"UseArray": true,
					"ModifierArray": [ 84.38, 281.25, 675, 1293.75, 2137.5, 3234.38, 4612.5, 6300, 8437.5, 11250 ]
				},
				{
					"TargetAttribute": "STAT_PROD_SPG",
					"UseArray": true,
					"ModifierArray": [ 0.13, 0.43, 1.04, 1.98, 3.28, 4.96, 7.07, 9.66, 12.94, 17.25 ]
				}
			],
			"Effects": [
				{
					"Origin": "Building",
					"Destination": "Fleets",
					"Target": "Scout",
					"TargetAttribute": "UNIT_SPD",
					"Type": "Modifier",
					"UseArray": true,
					"ModifierArray": [ 2, 4, 6, 8, 10, 12, 14, 16, 18, 20 ],
					"Conditions": [
						{
							"$type": "OperationCondition",
							"AcceptedTypes": [ "Scan" ]
						}
					]
				}
			]
		},
		{
			"Id": 2002,
			"Name": "Docking Bay",
			"Description": "Scouts cost <color=green>3%</color> less time to produce per level.",
			"FullDescription": "Scouts cost <color=green>3%</color> less time to produce per level.",
			"FlavourText": "The most complicated and time consuming part of scout production is sensor calibration and the installation of stealth systems.",
			"ImageID": "3",
			"Role": "Domain",
			"TierAffinity": [ 0 ],
			"Multiplicity": "StationUnique",
			"SlotAffinity": "Specialization",
			"StationType": "Normal",
			"LevelCap": 10,
			"Stats": [
				{
					"TargetAttribute": "COST_TIME",
					"UseArray": true,
					"ModifierArray": [ 4.22, 9.84, 19.69, 30.94, 42.19, 54.84, 68.91, 84.38, 106.88, 140.63 ]
				},
				{
					"TargetAttribute": "COST_MTL",
					"UseArray": true,
					"ModifierArray": [ 99.66796875, 232.5585938, 465.1171875, 730.8984375, 996.6796875, 1295.683594, 1627.910156, 1993.359375, 2524.921875, 3322.265625 ]
				},
				{
					"TargetAttribute": "COST_GAS",
					"UseArray": true,
					"ModifierArray": [ 166.1132813, 387.5976563, 775.1953125, 1218.164063, 1661.132813, 2159.472656, 2713.183594, 3322.265625, 4208.203125, 5537.109375 ]
				},
				{
					"TargetAttribute": "COST_CRS",
					"UseArray": true,
					"ModifierArray": [ 66.4453125, 155.0390625, 310.078125, 487.265625, 664.453125, 863.7890625, 1085.273438, 1328.90625, 1683.28125, 2214.84375 ]
				},
				{
					"TargetAttribute": "STAT_B_HP",
					"UseArray": true,
					"ModifierArray": [ 84.38, 281.25, 675, 1293.75, 2137.5, 3234.38, 4612.5, 6300, 8437.5, 11250 ]
				},
				{
					"TargetAttribute": "STAT_PROD_SPG",
					"UseArray": true,
					"ModifierArray": [ 0.13, 0.43, 1.04, 1.98, 3.28, 4.96, 7.07, 9.66, 12.94, 17.25 ]
				}
			],
			"Effects": [
				{
					"Origin": "Building",
					"Destination": "Station",
					"Target": "Scout",
					"TargetAttribute": "COST_TIME",
					"Type": "PercentageModifier",
					"UseArray": true,
					"ModifierArray": [ -0.03, -0.06, -0.09, -0.12, -0.15, -0.18, -0.21, -0.24, -0.27, -0.3 ]
				}
			]
		},
		{
			"Id": 2100,
			"Name": "Scout Command",
			"Description": "Supplied Scout fleets gain <color=green>0.8</color> firepower and <color=green>4</color> hit points per level.",
			"FullDescription": "Supplied Scout fleets gain <color=green>0.8</color> firepower and <color=green>4</color> hit points per level.",
			"FlavourText": "\"Not every cause of justice can be pursued openly. Sometimes, covert actions are a necessity.\" \n-- Koh Xi Kwok, Strike Team Leader",
			"ImageID": "7",
			"Role": "Domain",
			"TierAffinity": [ 1 ],
			"Multiplicity": "StationUnique",
			"SlotAffinity": "Specialization",
			"StationType": "Normal",
			"LevelCap": 10,
			"Stats": [
				{
					"TargetAttribute": "COST_TIME",
					"UseArray": true,
					"ModifierArray": [ 15, 31.88, 51.38, 76.88, 110.25, 146.25, 184.88, 232.5, 291, 360 ]
				},
				{
					"TargetAttribute": "COST_MTL",
					"UseArray": true,
					"ModifierArray": [ 374.0625, 794.8828125, 1281.164063, 1917.070313, 2749.359375, 3647.109375, 4610.320313, 5797.96875, 7256.8125, 8977.5 ]
				},
				{
					"TargetAttribute": "COST_GAS",
					"UseArray": true,
					"ModifierArray": [ 623.4375, 1324.804688, 2135.273438, 3195.117188, 4582.265625, 6078.515625, 7683.867188, 9663.28125, 12094.6875, 14962.5 ]
				},
				{
					"TargetAttribute": "COST_CRS",
					"UseArray": true,
					"ModifierArray": [ 249.375, 529.921875, 854.109375, 1278.046875, 1832.90625, 2431.40625, 3073.546875, 3865.3125, 4837.875, 5985 ]
				},
				{
					"TargetAttribute": "STAT_B_HP",
					"UseArray": true,
					"ModifierArray": [ 300, 937.5, 1965, 3502.5, 5707.5, 8632.5, 12330, 16980, 22800, 30000 ]
				},
				{
					"TargetAttribute": "STAT_PROD_SPG",
					"UseArray": true,
					"ModifierArray": [ 0.46, 1.44, 3.01, 5.37, 8.75, 13.24, 18.91, 26.04, 34.96, 46 ]
				}
			],
			"Effects": [
				{
					"Origin": "Building",
					"Destination": "Fleets",
					"Target": "Scout",
					"TargetAttribute": "UNIT_FIREPOWER",
					"Type": "Modifier",
					"UseArray": true,
					"ModifierArray": [ 0.8, 1.6, 2.4, 3.2, 4, 4.8, 5.6, 6.4, 7.2, 8 ]
				},
				{
					"Origin": "Building",
					"Destination": "Fleets",
					"Target": "Scout",
					"TargetAttribute": "UNIT_HP",
					"Type": "Modifier",
					"UseArray": true,
					"ModifierArray": [ 4, 8, 12, 16, 20, 24, 28, 32, 36, 40 ]
				}
			]
		},
		{
			"Id": 2101,
			"Name": "Communication Array",
			"Description": "Station scan radius increased by <color=green>1</color> per level.\n\nIncreases the station's scan strength by <color=green>20</color> per level.",
			"FullDescription": "Station scan radius increased by <color=green>1</color> per level.\n\nIncreases the station's scan strength by <color=green>20</color> per level.",
			"FlavourText": "Everything in space creates waves. Communications create radio, propulsion creates light and heat. You can gather intel over vast distances observing the spectrum. None do this better than the Atlas Syndicate.",
			"ImageID": "25",
			"Role": "Domain",
			"TierAffinity": [ 1 ],
			"Multiplicity": "StationUnique",
			"SlotAffinity": "Specialization",
			"StationType": "Normal",
			"LevelCap": 10,
			"Stats": [
				{
					"TargetAttribute": "COST_TIME",
					"UseArray": true,
					"ModifierArray": [ 15, 31.88, 51.38, 76.88, 110.25, 146.25, 184.88, 232.5, 291, 360 ]
				},
				{
					"TargetAttribute": "COST_MTL",
					"UseArray": true,
					"ModifierArray": [ 374.0625, 794.8828125, 1281.164063, 1917.070313, 2749.359375, 3647.109375, 4610.320313, 5797.96875, 7256.8125, 8977.5 ]
				},
				{
					"TargetAttribute": "COST_GAS",
					"UseArray": true,
					"ModifierArray": [ 623.4375, 1324.804688, 2135.273438, 3195.117188, 4582.265625, 6078.515625, 7683.867188, 9663.28125, 12094.6875, 14962.5 ]
				},
				{
					"TargetAttribute": "COST_CRS",
					"UseArray": true,
					"ModifierArray": [ 249.375, 529.921875, 854.109375, 1278.046875, 1832.90625, 2431.40625, 3073.546875, 3865.3125, 4837.875, 5985 ]
				},
				{
					"TargetAttribute": "STAT_B_HP",
					"UseArray": true,
					"ModifierArray": [ 300, 937.5, 1965, 3502.5, 5707.5, 8632.5, 12330, 16980, 22800, 30000 ]
				},
				{
					"TargetAttribute": "STAT_PROD_SPG",
					"UseArray": true,
					"ModifierArray": [ 0.46, 1.44, 3.01, 5.37, 8.75, 13.24, 18.91, 26.04, 34.96, 46 ]
				}
			],
			"Effects": [
				{
					"Origin": "Building",
					"Destination": "Station",
					"Target": "Station",
					"TargetAttribute": "STAT_SCAN_RADIUS",
					"Type": "Modifier",
					"UseArray": true,
					"ModifierArray": [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ]
				},
				{
					"Origin": "Building",
					"Destination": "Station",
					"Target": "Station",
					"TargetAttribute": "STAT_SCANSTR",
					"Type": "Modifier",
					"UseArray": true,
					"ModifierArray": [ 20, 40, 60, 80, 100, 120, 140, 160, 180, 200 ]
				}
			]
		},
		{
			"Id": 2102,
			"Name": "Station Hall",
			"Description": "Increases the station harvest rate by <color=green>4%</color> per level.",
			"FullDescription": "Increases the station harvest rate by <color=green>4%</color> per level.",
			"FlavourText": "Orderly bureaucracy ensures that available space is used more efficiently.",
			"ImageID": "31",
			"Role": "Domain",
			"TierAffinity": [ 1 ],
			"Multiplicity": "StationUnique",
			"SlotAffinity": "Specialization",
			"StationType": "Normal",
			"LevelCap": 10,
			"Stats": [
				{
					"TargetAttribute": "COST_TIME",
					"UseArray": true,
					"ModifierArray": [ 15, 31.88, 51.38, 76.88, 110.25, 146.25, 184.88, 232.5, 291, 360 ]
				},
				{
					"TargetAttribute": "COST_MTL",
					"UseArray": true,
					"ModifierArray": [ 374.0625, 794.8828125, 1281.164063, 1917.070313, 2749.359375, 3647.109375, 4610.320313, 5797.96875, 7256.8125, 8977.5 ]
				},
				{
					"TargetAttribute": "COST_GAS",
					"UseArray": true,
					"ModifierArray": [ 623.4375, 1324.804688, 2135.273438, 3195.117188, 4582.265625, 6078.515625, 7683.867188, 9663.28125, 12094.6875, 14962.5 ]
				},
				{
					"TargetAttribute": "COST_CRS",
					"UseArray": true,
					"ModifierArray": [ 249.375, 529.921875, 854.109375, 1278.046875, 1832.90625, 2431.40625, 3073.546875, 3865.3125, 4837.875, 5985 ]
				},
				{
					"TargetAttribute": "STAT_B_HP",
					"UseArray": true,
					"ModifierArray": [ 300, 937.5, 1965, 3502.5, 5707.5, 8632.5, 12330, 16980, 22800, 30000 ]
				},
				{
					"TargetAttribute": "STAT_PROD_SPG",
					"UseArray": true,
					"ModifierArray": [ 0.46, 1.44, 3.01, 5.37, 8.75, 13.24, 18.91, 26.04, 34.96, 46 ]
				}
			],
			"Effects": [
				{
					"Origin": "Building",
					"Destination": "Station",
					"Target": "Station",
					"TargetAttribute": "STAT_LOCAL_HARVEST_MODIFIER",
					"Type": "Modifier",
					"UseArray": true,
					"ModifierArray": [ 0.04, 0.08, 0.12, 0.16, 0.2, 0.24, 0.28, 0.32, 0.36, 0.4 ]
				}
			]
		},
		{
			"Id": 2200,
			"Name": "Internal Affairs",
			"Description": "Increases the station's hit points versus station sabotage by <color=green>2%</color> per level.\n\nIncreases the station's spy defense by <color=green>1</color> per level.",
			"FullDescription": "Increases the station's hit points versus station sabotage by <color=green>2%</color> per level.\n\nIncreases the station's spy defense by <color=green>1</color> per level.",
			"FlavourText": "Surveiling the enemy within.",
			"ImageID": "5",
			"Role": "Domain",
			"TierAffinity": [ 2 ],
			"Multiplicity": "StationUnique",
			"SlotAffinity": "Specialization",
			"StationType": "Normal",
			"LevelCap": 10,
			"Stats": [
				{
					"TargetAttribute": "COST_TIME",
					"UseArray": true,
					"ModifierArray": [ 24.75, 52.88, 85.5, 123.75, 165.38, 216, 276.75, 353.25, 434.25, 517.5 ]
				},
				{
					"TargetAttribute": "COST_MTL",
					"UseArray": true,
					"ModifierArray": [ 649.6875, 1387.96875, 2244.375, 3248.4375, 4341.09375, 5670, 7264.6875, 9272.8125, 11399.0625, 13584.375 ]
				},
				{
					"TargetAttribute": "COST_GAS",
					"UseArray": true,
					"ModifierArray": [ 1082.8125, 2313.28125, 3740.625, 5414.0625, 7235.15625, 9450, 12107.8125, 15454.6875, 18998.4375, 22640.625 ]
				},
				{
					"TargetAttribute": "COST_CRS",
					"UseArray": true,
					"ModifierArray": [ 433.125, 925.3125, 1496.25, 2165.625, 2894.0625, 3780, 4843.125, 6181.875, 7599.375, 9056.25 ]
				},
				{
					"TargetAttribute": "STAT_B_HP",
					"UseArray": true,
					"ModifierArray": [ 495, 1552.5, 3262.5, 5737.5, 9045, 13365, 18900, 25965, 34650, 45000 ]
				},
				{
					"TargetAttribute": "STAT_PROD_SPG",
					"UseArray": true,
					"ModifierArray": [ 0.76, 2.38, 5, 8.8, 13.87, 20.49, 28.98, 39.81, 53.13, 69 ]
				}
			],
			"Effects": [
				{
					"Origin": "Building",
					"Destination": "Station",
					"Target": "Station",
					"TargetAttribute": "STAT_SABOTAGE_PROTECTION",
					"Type": "PercentageModifier",
					"UseArray": true,
					"ModifierArray": [ 0.02, 0.04, 0.06, 0.08, 0.1, 0.12, 0.14, 0.16, 0.18, 0.2 ]
				},
				{
					"Origin": "Building",
					"Destination": "Station",
					"Target": "Station",
					"TargetAttribute": "STAT_SIGINT",
					"Type": "Modifier",
					"UseArray": true,
					"ModifierArray": [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ]
				}
			]
		},
		{
			"Id": 2201,
			"Name": "Relocation Bureau",
			"Description": "Allows the station to stream <color=green>80</color> labor per level.\n\nA station can only have a single stream (resource or labor) target.",
			"FullDescription": "Allows the station to stream <color=green>80</color> labor per level.\n\nA station can only have a single stream (resource or labor) target.",
			"FlavourText": "\"Mr. Bornescue! It's already decided, there's no point in arguing, you relocate tomorrow. I'm sure the good people at family services will reunite you promptly.\"\n--Bureau clerk #11.",
			"ImageID": "43",
			"Role": "Domain",
			"TierAffinity": [ 2 ],
			"Multiplicity": "StationUnique",
			"SlotAffinity": "Specialization",
			"StationType": "Normal",
			"LevelCap": 10,
			"Stats": [
				{
					"TargetAttribute": "COST_TIME",
					"UseArray": true,
					"ModifierArray": [ 24.75, 52.88, 85.5, 123.75, 165.38, 216, 276.75, 353.25, 434.25, 517.5 ]
				},
				{
					"TargetAttribute": "COST_MTL",
					"UseArray": true,
					"ModifierArray": [ 649.6875, 1387.96875, 2244.375, 3248.4375, 4341.09375, 5670, 7264.6875, 9272.8125, 11399.0625, 13584.375 ]
				},
				{
					"TargetAttribute": "COST_GAS",
					"UseArray": true,
					"ModifierArray": [ 1082.8125, 2313.28125, 3740.625, 5414.0625, 7235.15625, 9450, 12107.8125, 15454.6875, 18998.4375, 22640.625 ]
				},
				{
					"TargetAttribute": "COST_CRS",
					"UseArray": true,
					"ModifierArray": [ 433.125, 925.3125, 1496.25, 2165.625, 2894.0625, 3780, 4843.125, 6181.875, 7599.375, 9056.25 ]
				},
				{
					"TargetAttribute": "STAT_B_HP",
					"UseArray": true,
					"ModifierArray": [ 495, 1552.5, 3262.5, 5737.5, 9045, 13365, 18900, 25965, 34650, 45000 ]
				},
				{
					"TargetAttribute": "STAT_PROD_SPG",
					"UseArray": true,
					"ModifierArray": [ 0.76, 2.38, 5, 8.8, 13.87, 20.49, 28.98, 39.81, 53.13, 69 ]
				}
			],
			"Effects": [
				{
					"Origin": "Building",
					"Destination": "Station",
					"Target": "Station",
					"TargetAttribute": "STREAM_ICE",
					"Type": "Modifier",
					"UseArray": true,
					"ModifierArray": [ 80, 160, 240, 320, 400, 480, 560, 640, 720, 800 ]
				}
			]
		},
		{
			"Id": 2203,
			"Name": "Strategic Division",
			"Description": "Supplied Recon fleets gain <color=green>4</color> firepower and <color=green>10</color> hit points per level.",
			"FullDescription": "Supplied Recon fleets gain <color=green>4</color> firepower and <color=green>10</color> hit points per level.",
			"FlavourText": "Knowledge is power. \n-- Ancient Sol system saying.",
			"ImageID": "14",
			"Role": "Domain",
			"TierAffinity": [ 2 ],
			"Multiplicity": "StationUnique",
			"SlotAffinity": "Specialization",
			"StationType": "Normal",
			"LevelCap": 10,
			"Stats": [
				{
					"TargetAttribute": "COST_TIME",
					"UseArray": true,
					"ModifierArray": [ 24.75, 52.88, 85.5, 123.75, 165.38, 216, 276.75, 353.25, 434.25, 517.5 ]
				},
				{
					"TargetAttribute": "COST_MTL",
					"UseArray": true,
					"ModifierArray": [ 649.6875, 1387.96875, 2244.375, 3248.4375, 4341.09375, 5670, 7264.6875, 9272.8125, 11399.0625, 13584.375 ]
				},
				{
					"TargetAttribute": "COST_GAS",
					"UseArray": true,
					"ModifierArray": [ 1082.8125, 2313.28125, 3740.625, 5414.0625, 7235.15625, 9450, 12107.8125, 15454.6875, 18998.4375, 22640.625 ]
				},
				{
					"TargetAttribute": "COST_CRS",
					"UseArray": true,
					"ModifierArray": [ 433.125, 925.3125, 1496.25, 2165.625, 2894.0625, 3780, 4843.125, 6181.875, 7599.375, 9056.25 ]
				},
				{
					"TargetAttribute": "STAT_B_HP",
					"UseArray": true,
					"ModifierArray": [ 495, 1552.5, 3262.5, 5737.5, 9045, 13365, 18900, 25965, 34650, 45000 ]
				},
				{
					"TargetAttribute": "STAT_PROD_SPG",
					"UseArray": true,
					"ModifierArray": [ 0.76, 2.38, 5, 8.8, 13.87, 20.49, 28.98, 39.81, 53.13, 69 ]
				}
			],
			"Effects": [
				{
					"Origin": "Building",
					"Destination": "Fleets",
					"Target": "HeavyScout",
					"TargetAttribute": "UNIT_FIREPOWER",
					"Type": "Modifier",
					"UseArray": true,
					"ModifierArray": [ 4, 8, 12, 16, 20, 24, 28, 32, 36, 40 ]
				},
				{
					"Origin": "Building",
					"Destination": "Fleets",
					"Target": "HeavyScout",
					"TargetAttribute": "UNIT_HP",
					"Type": "Modifier",
					"UseArray": true,
					"ModifierArray": [ 10, 20, 30, 40, 50, 60, 70, 80, 90, 100 ]
				}
			]
		},
		{
			"Id": 2300,
			"Name": "Governor's Mansion",
			"Description": "Increases the station's claim strength by <color=green>0.5</color> per level.",
			"FullDescription": "Increases the station's claim strength by <color=green>0.5</color> per level.",
			"FlavourText": "\"Have you seen the mansion they're building for the governor?\" \n\"I have, looks like they built it in his image.\" \n\"How so?\" \n\"Well, it's a giant tonker, isn't it?\"",
			"ImageID": "45",
			"Role": "Domain",
			"TierAffinity": [ 3 ],
			"Multiplicity": "StationUnique",
			"SlotAffinity": "Specialization",
			"StationType": "Normal",
			"LevelCap": 10,
			"Stats": [
				{
					"TargetAttribute": "COST_TIME",
					"UseArray": true,
					"ModifierArray": [ 45, 93, 144, 198, 255, 315, 378, 447, 522, 603 ]
				},
				{
					"TargetAttribute": "COST_MTL",
					"UseArray": true,
					"ModifierArray": [ 1240.3125, 2563.3125, 3969, 5457.375, 7028.4375, 8682.1875, 10418.625, 12320.4375, 14387.625, 16620.1875 ]
				},
				{
					"TargetAttribute": "COST_GAS",
					"UseArray": true,
					"ModifierArray": [ 2067.1875, 4272.1875, 6615, 9095.625, 11714.0625, 14470.3125, 17364.375, 20534.0625, 23979.375, 27700.3125 ]
				},
				{
					"TargetAttribute": "COST_CRS",
					"UseArray": true,
					"ModifierArray": [ 826.875, 1708.875, 2646, 3638.25, 4685.625, 5788.125, 6945.75, 8213.625, 9591.75, 11080.125 ]
				},
				{
					"TargetAttribute": "STAT_B_HP",
					"UseArray": true,
					"ModifierArray": [ 900, 2760, 5640, 9600, 14700, 21000, 28560, 37500, 47940, 60000 ]
				},
				{
					"TargetAttribute": "STAT_PROD_SPG",
					"UseArray": true,
					"ModifierArray": [ 1.38, 4.23, 8.65, 14.72, 22.54, 32.2, 43.79, 57.5, 73.51, 92 ]
				}
			],
			"Effects": [
				{
					"Origin": "Building",
					"Destination": "Station",
					"Target": "Station",
					"TargetAttribute": "S_CLAIMSTR",
					"Type": "Modifier",
					"UseArray": true,
					"ModifierArray": [ 0.5, 1, 1.5, 2, 2.5, 3, 3.5, 4, 4.5, 5 ]
				}
			]
		},
		{
			"Id": 2301,
			"Name": "Institute of Technology",
			"Description": "Supplied <color=green>[ Scout | Recon ]</color> fleets gain <color=green>[ 0.8 | 4 ]</color> firepower and <color=green>[ 4 | 10 ]</color> hit points when sabotaging or defending against sabotage.\n\nSupplied fleets get <color=green>+5</color> stealth per level.",
			"FullDescription": "Supplied [ Scout | Recon ] fleets gain <color=green>[ 0.8 | 4 ]</color> firepower and <color=green>[ 4 | 10 ]</color> hit points when sabotaging or defending against sabotage.\n\nSupplied fleets get <color=green>+5</color> stealth per level.",
			"FlavourText": "You must plan out attacks against your own facilities to discover their vulnerabilities. Only then can you adequately protect yourself.\n-- Tianchao Standard Operating Procedures",
			"ImageID": "34",
			"Role": "Domain",
			"TierAffinity": [ 3 ],
			"Multiplicity": "StationUnique",
			"SlotAffinity": "Specialization",
			"StationType": "Normal",
			"LevelCap": 10,
			"Stats": [
				{
					"TargetAttribute": "COST_TIME",
					"UseArray": true,
					"ModifierArray": [ 45, 93, 144, 198, 255, 315, 378, 447, 522, 603 ]
				},
				{
					"TargetAttribute": "COST_MTL",
					"UseArray": true,
					"ModifierArray": [ 1240.3125, 2563.3125, 3969, 5457.375, 7028.4375, 8682.1875, 10418.625, 12320.4375, 14387.625, 16620.1875 ]
				},
				{
					"TargetAttribute": "COST_GAS",
					"UseArray": true,
					"ModifierArray": [ 2067.1875, 4272.1875, 6615, 9095.625, 11714.0625, 14470.3125, 17364.375, 20534.0625, 23979.375, 27700.3125 ]
				},
				{
					"TargetAttribute": "COST_CRS",
					"UseArray": true,
					"ModifierArray": [ 826.875, 1708.875, 2646, 3638.25, 4685.625, 5788.125, 6945.75, 8213.625, 9591.75, 11080.125 ]
				},
				{
					"TargetAttribute": "STAT_B_HP",
					"UseArray": true,
					"ModifierArray": [ 900, 2760, 5640, 9600, 14700, 21000, 28560, 37500, 47940, 60000 ]
				},
				{
					"TargetAttribute": "STAT_PROD_SPG",
					"UseArray": true,
					"ModifierArray": [ 1.38, 4.23, 8.65, 14.72, 22.54, 32.2, 43.79, 57.5, 73.51, 92 ]
				}
			],
			"Effects": [
				{
					"Origin": "Building",
					"Destination": "Fleets",
					"Target": "Scout",
					"TargetAttribute": "UNIT_FIREPOWER",
					"Type": "Modifier",
					"UseArray": true,
					"ModifierArray": [ 0.8, 1.6, 2.4, 3.2, 4, 4.8, 5.6, 6.4, 7.2, 8 ],
					"Conditions": [
						{
							"$type": "OperationCondition",
							"AcceptedTypes": [ "Sabotage", "SabotageStation" ]
						}
					]
				},
				{
					"Origin": "Building",
					"Destination": "Fleets",
					"Target": "Scout",
					"TargetAttribute": "UNIT_HP",
					"Type": "Modifier",
					"UseArray": true,
					"ModifierArray": [ 4, 8, 12, 16, 20, 24, 28, 32, 36, 40 ],
					"Conditions": [
						{
							"$type": "OperationCondition",
							"AcceptedTypes": [ "Sabotage", "SabotageStation" ]
						}
					]
				},
				{
					"Origin": "Building",
					"Destination": "Fleets",
					"Target": "HeavyScout",
					"TargetAttribute": "UNIT_FIREPOWER",
					"Type": "Modifier",
					"UseArray": true,
					"ModifierArray": [ 4, 8, 12, 16, 20, 24, 28, 32, 36, 40 ],
					"Conditions": [
						{
							"$type": "OperationCondition",
							"AcceptedTypes": [ "Sabotage", "SabotageStation" ]
						}
					]
				},
				{
					"Origin": "Building",
					"Destination": "Fleets",
					"Target": "HeavyScout",
					"TargetAttribute": "UNIT_HP",
					"Type": "Modifier",
					"UseArray": true,
					"ModifierArray": [ 10, 20, 30, 40, 50, 60, 70, 80, 90, 100 ],
					"Conditions": [
						{
							"$type": "OperationCondition",
							"AcceptedTypes": [ "Sabotage", "SabotageStation" ]
						}
					]
				},
				{
					"Origin": "Building",
					"Destination": "Fleets",
					"Target": "Fleet",
					"TargetAttribute": "UNIT_SIGINT",
					"Type": "Modifier",
					"UseArray": true,
					"ModifierArray": [ 5, 10, 15, 20, 25, 30, 35, 40, 45, 50 ]
				}
			]
		},
		{
			"Id": 2302,
			"Name": "Public Transport",
			"Description": "Increases the harvest rate of Habitation Dome by an additional <color=green>20%</color> per level.",
			"FullDescription": "Increases the harvest rate of Habitation Dome by an additional <color=green>20%</color> per level.",
			"FlavourText": "For optimal efficiency a reliable transport system for dome habitants is required. It's however best if you can marry 'reliable' with 'cheap'.",
			"ImageID": "18",
			"Role": "Domain",
			"TierAffinity": [ 3 ],
			"Multiplicity": "StationUnique",
			"SlotAffinity": "Specialization",
			"StationType": "Normal",
			"LevelCap": 10,
			"Stats": [
				{
					"TargetAttribute": "COST_TIME",
					"UseArray": true,
					"ModifierArray": [ 45, 93, 144, 198, 255, 315, 378, 447, 522, 603 ]
				},
				{
					"TargetAttribute": "COST_MTL",
					"UseArray": true,
					"ModifierArray": [ 1240.3125, 2563.3125, 3969, 5457.375, 7028.4375, 8682.1875, 10418.625, 12320.4375, 14387.625, 16620.1875 ]
				},
				{
					"TargetAttribute": "COST_GAS",
					"UseArray": true,
					"ModifierArray": [ 2067.1875, 4272.1875, 6615, 9095.625, 11714.0625, 14470.3125, 17364.375, 20534.0625, 23979.375, 27700.3125 ]
				},
				{
					"TargetAttribute": "COST_CRS",
					"UseArray": true,
					"ModifierArray": [ 826.875, 1708.875, 2646, 3638.25, 4685.625, 5788.125, 6945.75, 8213.625, 9591.75, 11080.125 ]
				},
				{
					"TargetAttribute": "STAT_B_HP",
					"UseArray": true,
					"ModifierArray": [ 900, 2760, 5640, 9600, 14700, 21000, 28560, 37500, 47940, 60000 ]
				},
				{
					"TargetAttribute": "STAT_PROD_SPG",
					"UseArray": true,
					"ModifierArray": [ 1.38, 4.23, 8.65, 14.72, 22.54, 32.2, 43.79, 57.5, 73.51, 92 ]
				}
			],
			"Effects": [
				{
					"Origin": "Building",
					"Destination": "Outpost",
					"Target": "HabitationDome",
					"TargetAttribute": "OP_HD_HARVEST_YIELD",
					"Type": "Modifier",
					"UseArray": true,
					"ModifierArray": [ 0.2, 0.4, 0.6, 0.8, 1, 1.2, 1.4, 1.6, 1.8, 2 ]
				}
			]
		},
		{
			"Id": 3000,
			"Name": "Container Port",
			"Description": "Adds <color=green>2</color> freighters to your empire's freighter pool per level.\n\nHides an amount of each resource type from raiders.\nEach level increases the amount hidden more than the next.",
			"FullDescription": "Adds <color=green>2</color> freighters to your empire's freighter pool per level.\n\nHides an amount of each resource type from raiders.\nEach level increases the amount hidden more than the next.",
			"FlavourText": "\"Looks like they're hiding them in the Container Port again. The fools.\"\n-- Max Rykov, ace pilot",
			"ImageID": 15,
			"Role": "Industry",
			"TierAffinity": [ 0 ],
			"Multiplicity": "StationUnique",
			"SlotAffinity": "Specialization",
			"StationType": "Normal",
			"LevelCap": 10,
			"Stats": [
				{
					"TargetAttribute": "COST_TIME",
					"UseArray": true,
					"ModifierArray": [ 4.22, 9.84, 19.69, 30.94, 42.19, 54.84, 68.91, 84.38, 106.88, 140.63 ]
				},
				{
					"TargetAttribute": "COST_MTL",
					"UseArray": true,
					"ModifierArray": [ 66.4453125, 155.0390625, 310.078125, 487.265625, 664.453125, 863.7890625, 1085.273438, 1328.90625, 1683.28125, 2214.84375 ]
				},
				{
					"TargetAttribute": "COST_GAS",
					"UseArray": true,
					"ModifierArray": [ 99.66796875, 232.5585938, 465.1171875, 730.8984375, 996.6796875, 1295.683594, 1627.910156, 1993.359375, 2524.921875, 3322.265625 ]
				},
				{
					"TargetAttribute": "COST_CRS",
					"UseArray": true,
					"ModifierArray": [ 166.1132813, 387.5976563, 775.1953125, 1218.164063, 1661.132813, 2159.472656, 2713.183594, 3322.265625, 4208.203125, 5537.109375 ]
				},
				{
					"TargetAttribute": "STAT_B_HP",
					"UseArray": true,
					"ModifierArray": [ 84.38, 281.25, 675, 1293.75, 2137.5, 3234.38, 4612.5, 6300, 8437.5, 11250 ]
				},
				{
					"TargetAttribute": "STAT_PROD_SPG",
					"UseArray": true,
					"ModifierArray": [ 0.13, 0.43, 1.04, 1.98, 3.28, 4.96, 7.07, 9.66, 12.94, 17.25 ]
				}
			],
			"Effects": [
				{
					"Origin": "Building",
					"Destination": "Station",
					"Target": "Station",
					"TargetAttribute": "STAT_FREIGHTCOUNT",
					"Type": "Modifier",
					"UseArray": true,
					"ModifierArray": [ 2, 4, 6, 8, 10, 12, 14, 16, 18, 20 ]
				},
				{
					"Origin": "Building",
					"Destination": "Station",
					"Target": "Station",
					"TargetAttribute": "STAT_RESHIDDEN",
					"Type": "Modifier",
					"UseArray": true,
					"ModifierArray": [ 2560, 8000, 16768, 29888, 48704, 73664, 105216, 144896, 194560, 256000 ]
				}
			]
		},
		{
			"Id": 3001,
			"Name": "Plasma Chamber",
			"Description": "Industrials harvesting solar flares from this station gain <color=green>3%</color> plasma cargo per level.\n\nIndustrials harvesting solar flares from this station gain <color=green>1</color> speed per level.",
			"FullDescription": "Industrials harvesting solar flares from this station gain <color=green>3%</color> plasma cargo per level.\n\nIndustrials harvesting solar flares from this station gain <color=green>1</color> speed per level.",
			"FlavourText": "Taming the fire of the stars is a complicated task, requiring precisely calibrated magnetic fields. In case of containment failure, only expendable labor is used, like robots or borts.",
			"ImageID": 36,
			"Role": "Industry",
			"TierAffinity": [ 0 ],
			"Multiplicity": "StationUnique",
			"SlotAffinity": "Specialization",
			"StationType": "Normal",
			"LevelCap": 10,
			"Stats": [
				{
					"TargetAttribute": "COST_TIME",
					"UseArray": true,
					"ModifierArray": [ 4.22, 9.84, 19.69, 30.94, 42.19, 54.84, 68.91, 84.38, 106.88, 140.63 ]
				},
				{
					"TargetAttribute": "COST_MTL",
					"UseArray": true,
					"ModifierArray": [ 66.4453125, 155.0390625, 310.078125, 487.265625, 664.453125, 863.7890625, 1085.273438, 1328.90625, 1683.28125, 2214.84375 ]
				},
				{
					"TargetAttribute": "COST_GAS",
					"UseArray": true,
					"ModifierArray": [ 99.66796875, 232.5585938, 465.1171875, 730.8984375, 996.6796875, 1295.683594, 1627.910156, 1993.359375, 2524.921875, 3322.265625 ]
				},
				{
					"TargetAttribute": "COST_CRS",
					"UseArray": true,
					"ModifierArray": [ 166.1132813, 387.5976563, 775.1953125, 1218.164063, 1661.132813, 2159.472656, 2713.183594, 3322.265625, 4208.203125, 5537.109375 ]
				},
				{
					"TargetAttribute": "STAT_B_HP",
					"UseArray": true,
					"ModifierArray": [ 84.38, 281.25, 675, 1293.75, 2137.5, 3234.38, 4612.5, 6300, 8437.5, 11250 ]
				},
				{
					"TargetAttribute": "STAT_PROD_SPG",
					"UseArray": true,
					"ModifierArray": [ 0.13, 0.43, 1.04, 1.98, 3.28, 4.96, 7.07, 9.66, 12.94, 17.25 ]
				}
			],
			"Effects": [
				{
					"Origin": "Building",
					"Destination": "FleetsInRange",
					"Target": "Industrial",
					"TargetAttribute": "UNIT_PLASMA_HARVESTING",
					"Type": "Modifier",
					"UseArray": true,
					"ModifierArray": [ 0.03, 0.06, 0.09, 0.12, 0.15, 0.18, 0.21, 0.24, 0.27, 0.3 ],
					"Conditions": [
						{
							"$type": "OperationCondition",
							"AcceptedTypes": [ "CompleteStarMission" ]
						}
					],
					"Radius": 0,
					"Coverage": "Owner"
				},
				{
					"Origin": "Building",
					"Destination": "FleetsInRange",
					"Target": "Industrial",
					"TargetAttribute": "UNIT_SPD",
					"Type": "Modifier",
					"UseArray": true,
					"ModifierArray": [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ],
					"Conditions": [
						{
							"$type": "OperationCondition",
							"AcceptedTypes": [ "CompleteStarMission" ]
						}
					],
					"Radius": 0,
					"Coverage": "Owner"
				}
			]
		},
		{
			"Id": 3002,
			"Name": "Trailer Manufacturing",
			"Description": "Supplied Industrial fleets gain <color=green>4</color> cargo space per level.",
			"FullDescription": "Supplied Industrial fleets gain <color=green>4</color> cargo space per level.",
			"FlavourText": "Terran Combine pioneered the use of extremely compact drive systems to expand industrial cargo. It is one of few Combine technologies others have managed to recreate.",
			"ImageID": 19,
			"Role": "Industry",
			"TierAffinity": [ 0 ],
			"Multiplicity": "StationUnique",
			"SlotAffinity": "Specialization",
			"StationType": "Normal",
			"LevelCap": 10,
			"Stats": [
				{
					"TargetAttribute": "COST_TIME",
					"UseArray": true,
					"ModifierArray": [ 4.22, 9.84, 19.69, 30.94, 42.19, 54.84, 68.91, 84.38, 106.88, 140.63 ]
				},
				{
					"TargetAttribute": "COST_MTL",
					"UseArray": true,
					"ModifierArray": [ 66.4453125, 155.0390625, 310.078125, 487.265625, 664.453125, 863.7890625, 1085.273438, 1328.90625, 1683.28125, 2214.84375 ]
				},
				{
					"TargetAttribute": "COST_GAS",
					"UseArray": true,
					"ModifierArray": [ 99.66796875, 232.5585938, 465.1171875, 730.8984375, 996.6796875, 1295.683594, 1627.910156, 1993.359375, 2524.921875, 3322.265625 ]
				},
				{
					"TargetAttribute": "COST_CRS",
					"UseArray": true,
					"ModifierArray": [ 166.1132813, 387.5976563, 775.1953125, 1218.164063, 1661.132813, 2159.472656, 2713.183594, 3322.265625, 4208.203125, 5537.109375 ]
				},
				{
					"TargetAttribute": "STAT_B_HP",
					"UseArray": true,
					"ModifierArray": [ 84.38, 281.25, 675, 1293.75, 2137.5, 3234.38, 4612.5, 6300, 8437.5, 11250 ]
				},
				{
					"TargetAttribute": "STAT_PROD_SPG",
					"UseArray": true,
					"ModifierArray": [ 0.13, 0.43, 1.04, 1.98, 3.28, 4.96, 7.07, 9.66, 12.94, 17.25 ]
				}
			],
			"Effects": [
				{
					"Origin": "Building",
					"Destination": "Fleets",
					"Target": "Industrial",
					"TargetAttribute": "UNIT_CARGO",
					"Type": "Modifier",
					"UseArray": true,
					"ModifierArray": [ 4, 8, 12, 16, 20, 24, 28, 32, 36, 40 ]
				}
			]
		},
		{
			"Id": 3100,
			"Name": "Frachead Assembly",
			"Description": "Increases the harvest rate of Mining Facilities by an additional <color=green>15%</color> per level per hour.",
			"FullDescription": "Increases the harvest rate of Mining Facilities by an additional <color=green>15%</color> per level per hour.",
			"FlavourText": "Manufactures helium explosion heads for zero-g fracking. Outside the business, frachead workers are called \"He-fracs\".  Inside the business they call themselves \"He-he fracs\".",
			"ImageID": 22,
			"Role": "Industry",
			"TierAffinity": [ 1 ],
			"Multiplicity": "StationUnique",
			"SlotAffinity": "Specialization",
			"StationType": "Normal",
			"LevelCap": 10,
			"Stats": [
				{
					"TargetAttribute": "COST_TIME",
					"UseArray": true,
					"ModifierArray": [ 15, 31.88, 51.38, 76.88, 110.25, 146.25, 184.88, 232.5, 291, 360 ]
				},
				{
					"TargetAttribute": "COST_MTL",
					"UseArray": true,
					"ModifierArray": [ 249.375, 529.921875, 854.109375, 1278.046875, 1832.90625, 2431.40625, 3073.546875, 3865.3125, 4837.875, 5985 ]
				},
				{
					"TargetAttribute": "COST_GAS",
					"UseArray": true,
					"ModifierArray": [ 374.0625, 794.8828125, 1281.164063, 1917.070313, 2749.359375, 3647.109375, 4610.320313, 5797.96875, 7256.8125, 8977.5 ]
				},
				{
					"TargetAttribute": "COST_CRS",
					"UseArray": true,
					"ModifierArray": [ 623.4375, 1324.804688, 2135.273438, 3195.117188, 4582.265625, 6078.515625, 7683.867188, 9663.28125, 12094.6875, 14962.5 ]
				},
				{
					"TargetAttribute": "STAT_B_HP",
					"UseArray": true,
					"ModifierArray": [ 300, 937.5, 1965, 3502.5, 5707.5, 8632.5, 12330, 16980, 22800, 30000 ]
				},
				{
					"TargetAttribute": "STAT_PROD_SPG",
					"UseArray": true,
					"ModifierArray": [ 0.46, 1.44, 3.01, 5.37, 8.75, 13.24, 18.91, 26.04, 34.96, 46 ]
				}
			],
			"Effects": [
				{
					"Origin": "Building",
					"Destination": "Outpost",
					"Target": "MiningFacility",
					"TargetAttribute": "OP_MOP_YIELD",
					"Type": "Modifier",
					"UseArray": true,
					"ModifierArray": [ 0.15, 0.3, 0.45, 0.6, 0.75, 0.9, 1.05, 1.2, 1.35, 1.5 ]
				}
			]
		},
		{
			"Id": 3101,
			"Name": "Warehouse",
			"Description": "Increases the station's capacity to store metal, gas and crystal.\nEach level increases the capacity more than the next.",
			"FullDescription": "Increases the station's capacity to store metal, gas and crystal.\nEach level increases the capacity more than the next.",
			"FlavourText": "\"We wouldn't need all this storage if we had decent freighting capacity, it's like asking to be raided!\"\n\n-- Natasha Fer, Union Representative",
			"ImageID": 33,
			"Role": "Industry",
			"TierAffinity": [ 1 ],
			"Multiplicity": "StationUnique",
			"SlotAffinity": "Specialization",
			"StationType": "Normal",
			"LevelCap": 10,
			"Stats": [
				{
					"TargetAttribute": "COST_TIME",
					"UseArray": true,
					"ModifierArray": [ 15, 31.88, 51.38, 76.88, 110.25, 146.25, 184.88, 232.5, 291, 360 ]
				},
				{
					"TargetAttribute": "COST_MTL",
					"UseArray": true,
					"ModifierArray": [ 249.375, 529.921875, 854.109375, 1278.046875, 1832.90625, 2431.40625, 3073.546875, 3865.3125, 4837.875, 5985 ]
				},
				{
					"TargetAttribute": "COST_GAS",
					"UseArray": true,
					"ModifierArray": [ 374.0625, 794.8828125, 1281.164063, 1917.070313, 2749.359375, 3647.109375, 4610.320313, 5797.96875, 7256.8125, 8977.5 ]
				},
				{
					"TargetAttribute": "COST_CRS",
					"UseArray": true,
					"ModifierArray": [ 623.4375, 1324.804688, 2135.273438, 3195.117188, 4582.265625, 6078.515625, 7683.867188, 9663.28125, 12094.6875, 14962.5 ]
				},
				{
					"TargetAttribute": "STAT_B_HP",
					"UseArray": true,
					"ModifierArray": [ 300, 937.5, 1965, 3502.5, 5707.5, 8632.5, 12330, 16980, 22800, 30000 ]
				},
				{
					"TargetAttribute": "STAT_PROD_SPG",
					"UseArray": true,
					"ModifierArray": [ 0.46, 1.44, 3.01, 5.37, 8.75, 13.24, 18.91, 26.04, 34.96, 46 ]
				}
			],
			"Effects": [
				{
					"Origin": "Building",
					"Destination": "Station",
					"Target": "Station",
					"TargetAttribute": "STAT_PROD_CAP",
					"Type": "Modifier",
					"UseArray": true,
					"ModifierArray": [ 1500, 5000, 12000, 23000, 38000, 57500, 82000, 112000, 150000, 200000 ]
				}
			]
		},
		{
			"Id": 3102,
			"Name": "Resource Bazaar",
			"Description": "Lowers the resource exchange ratio for this station by <color=green>0.1</color> per level.",
			"FullDescription": "Lowers the resource exchange ratio for this station by <color=green>0.1</color> per level.",
			"FlavourText": "\"A week ago I traded ten tonnes of metal for five tonnes of crystal and now you're offering me a tonne of metal --MY metal-- for three tonnes of crystals!?\"\n\"Best I can do.\"",
			"ImageID": 1,
			"Role": "Industry",
			"TierAffinity": [ 1 ],
			"Multiplicity": "StationUnique",
			"SlotAffinity": "Specialization",
			"StationType": "Normal",
			"LevelCap": 10,
			"Stats": [
				{
					"TargetAttribute": "COST_TIME",
					"UseArray": true,
					"ModifierArray": [ 15, 31.88, 51.38, 76.88, 110.25, 146.25, 184.88, 232.5, 291, 360 ]
				},
				{
					"TargetAttribute": "COST_MTL",
					"UseArray": true,
					"ModifierArray": [ 249.375, 529.921875, 854.109375, 1278.046875, 1832.90625, 2431.40625, 3073.546875, 3865.3125, 4837.875, 5985 ]
				},
				{
					"TargetAttribute": "COST_GAS",
					"UseArray": true,
					"ModifierArray": [ 374.0625, 794.8828125, 1281.164063, 1917.070313, 2749.359375, 3647.109375, 4610.320313, 5797.96875, 7256.8125, 8977.5 ]
				},
				{
					"TargetAttribute": "COST_CRS",
					"UseArray": true,
					"ModifierArray": [ 623.4375, 1324.804688, 2135.273438, 3195.117188, 4582.265625, 6078.515625, 7683.867188, 9663.28125, 12094.6875, 14962.5 ]
				},
				{
					"TargetAttribute": "STAT_B_HP",
					"UseArray": true,
					"ModifierArray": [ 300, 937.5, 1965, 3502.5, 5707.5, 8632.5, 12330, 16980, 22800, 30000 ]
				},
				{
					"TargetAttribute": "STAT_PROD_SPG",
					"UseArray": true,
					"ModifierArray": [ 0.46, 1.44, 3.01, 5.37, 8.75, 13.24, 18.91, 26.04, 34.96, 46 ]
				}
			],
			"Effects": [
				{
					"Origin": "Building",
					"Destination": "Station",
					"Target": "Station",
					"TargetAttribute": "STAT_RESOURCE_EXCHANGE_RATE",
					"Type": "Modifier",
					"UseArray": true,
					"ModifierArray": [ -0.1, -0.2, -0.3, -0.4, -0.5, -0.6, -0.7, -0.8, -0.9, -1 ]
				}
			]
		},
		{
			"Id": 3200,
			"Name": "Drone Launch Facility",
			"Description": "Allows the station to stream <color=green>50</color> metal, gas and crystal per level.\n\nA station can only have a single stream (resource or labor) target.",
			"FullDescription": "Allows the station to stream <color=green>50</color> metal, gas and crystal per level.\n\nA station can only have a single stream (resource or labor) target.",
			"FlavourText": "Automated drones that travel at enormous speeds are a new trend in resource delivery. Though they need no pilots, their cost prevents their usage for high-capacity transport.",
			"ImageID": 11,
			"Role": "Industry",
			"TierAffinity": [ 2 ],
			"Multiplicity": "StationUnique",
			"SlotAffinity": "Specialization",
			"StationType": "Normal",
			"LevelCap": 10,
			"Stats": [
				{
					"TargetAttribute": "COST_TIME",
					"UseArray": true,
					"ModifierArray": [ 24.75, 52.88, 85.5, 123.75, 165.38, 216, 276.75, 353.25, 434.25, 517.5 ]
				},
				{
					"TargetAttribute": "COST_MTL",
					"UseArray": true,
					"ModifierArray": [ 433.125, 925.3125, 1496.25, 2165.625, 2894.0625, 3780, 4843.125, 6181.875, 7599.375, 9056.25 ]
				},
				{
					"TargetAttribute": "COST_GAS",
					"UseArray": true,
					"ModifierArray": [ 649.6875, 1387.96875, 2244.375, 3248.4375, 4341.09375, 5670, 7264.6875, 9272.8125, 11399.0625, 13584.375 ]
				},
				{
					"TargetAttribute": "COST_CRS",
					"UseArray": true,
					"ModifierArray": [ 1082.8125, 2313.28125, 3740.625, 5414.0625, 7235.15625, 9450, 12107.8125, 15454.6875, 18998.4375, 22640.625 ]
				},
				{
					"TargetAttribute": "STAT_B_HP",
					"UseArray": true,
					"ModifierArray": [ 495, 1552.5, 3262.5, 5737.5, 9045, 13365, 18900, 25965, 34650, 45000 ]
				},
				{
					"TargetAttribute": "STAT_PROD_SPG",
					"UseArray": true,
					"ModifierArray": [ 0.76, 2.38, 5, 8.8, 13.87, 20.49, 28.98, 39.81, 53.13, 69 ]
				}
			],
			"Effects": [
				{
					"Origin": "Building",
					"Destination": "Station",
					"Target": "Station",
					"TargetAttribute": "STREAM_METAL",
					"Type": "Modifier",
					"UseArray": true,
					"ModifierArray": [ 50, 100, 150, 200, 250, 300, 350, 400, 450, 500 ]
				},
				{
					"Origin": "Building",
					"Destination": "Station",
					"Target": "Station",
					"TargetAttribute": "STREAM_GAS",
					"Type": "Modifier",
					"UseArray": true,
					"ModifierArray": [ 50, 100, 150, 200, 250, 300, 350, 400, 450, 500 ]
				},
				{
					"Origin": "Building",
					"Destination": "Station",
					"Target": "Station",
					"TargetAttribute": "STREAM_CRYSTAL",
					"Type": "Modifier",
					"UseArray": true,
					"ModifierArray": [ 50, 100, 150, 200, 250, 300, 350, 400, 450, 500 ]
				}
			]
		},
		{
			"Id": 3201,
			"Name": "Distribution Hub",
			"Description": "Freighters departing this station gain <color=green>15</color> cargo space per level.\n\nFreighters departing this station gain <color=green>2</color> speed per level.",
			"FullDescription": "Freighters departing this station gain <color=green>15</color> cargo space per level.\n\nFreighters departing this station gain <color=green>2</color> speed per level.",
			"FlavourText": "\"Do you think we harvest these resources for local benefit? Please, think again.\"\n-- Mal Estrade",
			"ImageID": 16,
			"Role": "Industry",
			"TierAffinity": [ 2 ],
			"Multiplicity": "StationUnique",
			"SlotAffinity": "Specialization",
			"StationType": "Normal",
			"LevelCap": 10,
			"Stats": [
				{
					"TargetAttribute": "COST_TIME",
					"UseArray": true,
					"ModifierArray": [ 24.75, 52.88, 85.5, 123.75, 165.38, 216, 276.75, 353.25, 434.25, 517.5 ]
				},
				{
					"TargetAttribute": "COST_MTL",
					"UseArray": true,
					"ModifierArray": [ 433.125, 925.3125, 1496.25, 2165.625, 2894.0625, 3780, 4843.125, 6181.875, 7599.375, 9056.25 ]
				},
				{
					"TargetAttribute": "COST_GAS",
					"UseArray": true,
					"ModifierArray": [ 649.6875, 1387.96875, 2244.375, 3248.4375, 4341.09375, 5670, 7264.6875, 9272.8125, 11399.0625, 13584.375 ]
				},
				{
					"TargetAttribute": "COST_CRS",
					"UseArray": true,
					"ModifierArray": [ 1082.8125, 2313.28125, 3740.625, 5414.0625, 7235.15625, 9450, 12107.8125, 15454.6875, 18998.4375, 22640.625 ]
				},
				{
					"TargetAttribute": "STAT_B_HP",
					"UseArray": true,
					"ModifierArray": [ 495, 1552.5, 3262.5, 5737.5, 9045, 13365, 18900, 25965, 34650, 45000 ]
				},
				{
					"TargetAttribute": "STAT_PROD_SPG",
					"UseArray": true,
					"ModifierArray": [ 0.76, 2.38, 5, 8.8, 13.87, 20.49, 28.98, 39.81, 53.13, 69 ]
				}
			],
			"Effects": [
				{
					"Origin": "Building",
					"Destination": "Station",
					"Target": "Station",
					"TargetAttribute": "STAT_FREIGHTER_CARGO",
					"Type": "Modifier",
					"UseArray": true,
					"ModifierArray": [ 15, 30, 45, 60, 75, 90, 105, 120, 135, 150 ]
				},
				{
					"Origin": "Building",
					"Destination": "Station",
					"Target": "Station",
					"TargetAttribute": "STAT_FREIGHTER_SPD",
					"Type": "Modifier",
					"UseArray": true,
					"ModifierArray": [ 2, 4, 6, 8, 10, 12, 14, 16, 18, 20 ]
				}
			]
		},
		{
			"Id": 3202,
			"Name": "Outpost Management Services",
			"Description": "Station's outposts gain <color=green>1.5%</color> hit points per level.",
			"FullDescription": "Station's outposts gain <color=green>1.5%</color> hit points per level.",
			"FlavourText": "\"No. Don't just blindly follow the blueprints. Adjust the formula to match the local gravitational conditions.\"\n-- Terran Combine advisor.",
			"ImageID": 9,
			"Role": "Industry",
			"TierAffinity": [ 2 ],
			"Multiplicity": "StationUnique",
			"SlotAffinity": "Specialization",
			"StationType": "Normal",
			"LevelCap": 10,
			"Stats": [
				{
					"TargetAttribute": "COST_TIME",
					"UseArray": true,
					"ModifierArray": [ 24.75, 52.88, 85.5, 123.75, 165.38, 216, 276.75, 353.25, 434.25, 517.5 ]
				},
				{
					"TargetAttribute": "COST_MTL",
					"UseArray": true,
					"ModifierArray": [ 433.125, 925.3125, 1496.25, 2165.625, 2894.0625, 3780, 4843.125, 6181.875, 7599.375, 9056.25 ]
				},
				{
					"TargetAttribute": "COST_GAS",
					"UseArray": true,
					"ModifierArray": [ 649.6875, 1387.96875, 2244.375, 3248.4375, 4341.09375, 5670, 7264.6875, 9272.8125, 11399.0625, 13584.375 ]
				},
				{
					"TargetAttribute": "COST_CRS",
					"UseArray": true,
					"ModifierArray": [ 1082.8125, 2313.28125, 3740.625, 5414.0625, 7235.15625, 9450, 12107.8125, 15454.6875, 18998.4375, 22640.625 ]
				},
				{
					"TargetAttribute": "STAT_B_HP",
					"UseArray": true,
					"ModifierArray": [ 495, 1552.5, 3262.5, 5737.5, 9045, 13365, 18900, 25965, 34650, 45000 ]
				},
				{
					"TargetAttribute": "STAT_PROD_SPG",
					"UseArray": true,
					"ModifierArray": [ 0.76, 2.38, 5, 8.8, 13.87, 20.49, 28.98, 39.81, 53.13, 69 ]
				}
			],
			"Effects": [
				{
					"Origin": "Building",
					"Destination": "Outpost",
					"Target": "Outpost",
					"TargetAttribute": "OP_HITPOINTS",
					"Type": "PercentageModifier",
					"UseArray": true,
					"ModifierArray": [ 0.015, 0.03, 0.045, 0.06, 0.075, 0.09, 0.105, 0.12, 0.135, 0.15 ]
				}
			]
		},
		{
			"Id": 3300,
			"Name": "Trucker's Hall",
			"Description": "Supplied Industrial fleets cost <color=green>5%</color> less labor per level.\n\nSupplied Industrial fleets get <color=green>1</color> speed per level.",
			"FullDescription": "Supplied Industrial fleets cost <color=green>5%</color> less labor per level.\n\nSupplied Industrial fleets get <color=green>1</color> speed per level.",
			"FlavourText": "In equal parts home to revelry and complaints, a Trucker's Hall is a place where freighter crews gather, share stories and drink in the company of peers. A sharp contrast to their lonely careers.",
			"Role": "Industry",
			"TierAffinity": [ 3 ],
			"Multiplicity": "StationUnique",
			"SlotAffinity": "Specialization",
			"StationType": "Normal",
			"LevelCap": 10,
			"Stats": [
				{
					"TargetAttribute": "COST_TIME",
					"UseArray": true,
					"ModifierArray": [ 45, 93, 144, 198, 255, 315, 378, 447, 522, 603 ]
				},
				{
					"TargetAttribute": "COST_MTL",
					"UseArray": true,
					"ModifierArray": [ 826.875, 1708.875, 2646, 3638.25, 4685.625, 5788.125, 6945.75, 8213.625, 9591.75, 11080.125 ]
				},
				{
					"TargetAttribute": "COST_GAS",
					"UseArray": true,
					"ModifierArray": [ 1240.3125, 2563.3125, 3969, 5457.375, 7028.4375, 8682.1875, 10418.625, 12320.4375, 14387.625, 16620.1875 ]
				},
				{
					"TargetAttribute": "COST_CRS",
					"UseArray": true,
					"ModifierArray": [ 2067.1875, 4272.1875, 6615, 9095.625, 11714.0625, 14470.3125, 17364.375, 20534.0625, 23979.375, 27700.3125 ]
				},
				{
					"TargetAttribute": "STAT_B_HP",
					"UseArray": true,
					"ModifierArray": [ 900, 2760, 5640, 9600, 14700, 21000, 28560, 37500, 47940, 60000 ]
				},
				{
					"TargetAttribute": "STAT_PROD_SPG",
					"UseArray": true,
					"ModifierArray": [ 1.38, 4.23, 8.65, 14.72, 22.54, 32.2, 43.79, 57.5, 73.51, 92 ]
				}
			],
			"Effects": [
				{
					"Origin": "Building",
					"Destination": "Fleets",
					"Target": "Industrial",
					"TargetAttribute": "COST_UPKEEP",
					"Type": "PercentageModifier",
					"UseArray": true,
					"ModifierArray": [ -0.05, -0.1, -0.15, -0.2, -0.25, -0.3, -0.35, -0.4, -0.45, -0.5 ]
				},
				{
					"Origin": "Building",
					"Destination": "Fleets",
					"Target": "Industrial",
					"TargetAttribute": "UNIT_SPD",
					"Type": "Modifier",
					"UseArray": true,
					"ModifierArray": [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ]
				}
			]
		},
		{
			"Id": 3301,
			"Name": "Industrial Complex",
			"Description": "Increases the metal, gas and crystal output of the station by <color=green>1.5%</color> of its base rate per level.",
			"FullDescription": "Increases the metal, gas and crystal output of the station by <color=green>1.5%</color> of its base rate per level.",
			"FlavourText": "A colossal amalgamation of interconnected facilities employing the most advanced production and refinement procedures.",
			"ImageID": 17,
			"Role": "Industry",
			"TierAffinity": [ 3 ],
			"Multiplicity": "StationUnique",
			"SlotAffinity": "Specialization",
			"StationType": "Normal",
			"LevelCap": 10,
			"Stats": [
				{
					"TargetAttribute": "COST_TIME",
					"UseArray": true,
					"ModifierArray": [ 45, 93, 144, 198, 255, 315, 378, 447, 522, 603 ]
				},
				{
					"TargetAttribute": "COST_MTL",
					"UseArray": true,
					"ModifierArray": [ 826.875, 1708.875, 2646, 3638.25, 4685.625, 5788.125, 6945.75, 8213.625, 9591.75, 11080.125 ]
				},
				{
					"TargetAttribute": "COST_GAS",
					"UseArray": true,
					"ModifierArray": [ 1240.3125, 2563.3125, 3969, 5457.375, 7028.4375, 8682.1875, 10418.625, 12320.4375, 14387.625, 16620.1875 ]
				},
				{
					"TargetAttribute": "COST_CRS",
					"UseArray": true,
					"ModifierArray": [ 2067.1875, 4272.1875, 6615, 9095.625, 11714.0625, 14470.3125, 17364.375, 20534.0625, 23979.375, 27700.3125 ]
				},
				{
					"TargetAttribute": "STAT_B_HP",
					"UseArray": true,
					"ModifierArray": [ 900, 2760, 5640, 9600, 14700, 21000, 28560, 37500, 47940, 60000 ]
				},
				{
					"TargetAttribute": "STAT_PROD_SPG",
					"UseArray": true,
					"ModifierArray": [ 1.38, 4.23, 8.65, 14.72, 22.54, 32.2, 43.79, 57.5, 73.51, 92 ]
				}
			],
			"Effects": [
				{
					"Origin": "Building",
					"Destination": "Station",
					"Target": "Station",
					"TargetAttribute": "PROD_MTL",
					"Type": "Multiplier",
					"UseArray": true,
					"ModifierArray": [ 0.015, 0.03, 0.045, 0.06, 0.075, 0.09, 0.105, 0.12, 0.135, 0.15 ]
				},
				{
					"Origin": "Building",
					"Destination": "Station",
					"Target": "Station",
					"TargetAttribute": "PROD_GAS",
					"Type": "Multiplier",
					"UseArray": true,
					"ModifierArray": [ 0.015, 0.03, 0.045, 0.06, 0.075, 0.09, 0.105, 0.12, 0.135, 0.15 ]
				},
				{
					"Origin": "Building",
					"Destination": "Station",
					"Target": "Station",
					"TargetAttribute": "PROD_CRS",
					"Type": "Multiplier",
					"UseArray": true,
					"ModifierArray": [ 0.015, 0.03, 0.045, 0.06, 0.075, 0.09, 0.105, 0.12, 0.135, 0.15 ]
				}
			]
		},
		{
			"Id": 3302,
			"Name": "Colonial Relay",
			"Description": "Increases the Mining Colony harvest rate by an additional <color=green>20%</color> per level.",
			"FullDescription": "Increases the Mining Colony harvest rate by an additional <color=green>20%</color> per level.",
			"FlavourText": "The relay is particularly popular with the Martian Prosper League, letting them strip mine entire planets in record time.",
			"ImageID": 14,
			"Role": "Industry",
			"TierAffinity": [ 3 ],
			"Multiplicity": "StationUnique",
			"SlotAffinity": "Specialization",
			"StationType": "Normal",
			"LevelCap": 10,
			"Stats": [
				{
					"TargetAttribute": "COST_TIME",
					"UseArray": true,
					"ModifierArray": [ 45, 93, 144, 198, 255, 315, 378, 447, 522, 603 ]
				},
				{
					"TargetAttribute": "COST_MTL",
					"UseArray": true,
					"ModifierArray": [ 826.875, 1708.875, 2646, 3638.25, 4685.625, 5788.125, 6945.75, 8213.625, 9591.75, 11080.125 ]
				},
				{
					"TargetAttribute": "COST_GAS",
					"UseArray": true,
					"ModifierArray": [ 1240.3125, 2563.3125, 3969, 5457.375, 7028.4375, 8682.1875, 10418.625, 12320.4375, 14387.625, 16620.1875 ]
				},
				{
					"TargetAttribute": "COST_CRS",
					"UseArray": true,
					"ModifierArray": [ 2067.1875, 4272.1875, 6615, 9095.625, 11714.0625, 14470.3125, 17364.375, 20534.0625, 23979.375, 27700.3125 ]
				},
				{
					"TargetAttribute": "STAT_B_HP",
					"UseArray": true,
					"ModifierArray": [ 900, 2760, 5640, 9600, 14700, 21000, 28560, 37500, 47940, 60000 ]
				},
				{
					"TargetAttribute": "STAT_PROD_SPG",
					"UseArray": true,
					"ModifierArray": [ 1.38, 4.23, 8.65, 14.72, 22.54, 32.2, 43.79, 57.5, 73.51, 92 ]
				}
			],
			"Effects": [
				{
					"Origin": "Building",
					"Destination": "Outpost",
					"Target": "MiningColony",
					"TargetAttribute": "OP_MC_YIELD",
					"Type": "Modifier",
					"UseArray": true,
					"ModifierArray": [ 0.2, 0.4, 0.6, 0.8, 1, 1.2, 1.4, 1.6, 1.8, 2 ]
				}
			]
		},
		{
			"Id": 500,
			"Name": "The Seat",
			"Description": "Produces credits for your empire.\n\nIncreases the station's fleet operating limit by <color=green>1</color> per level for levels 11 through 20.\n\nProvides 1000 labor at level 1.",
			"FullDescription": "Produces credits for your empire.\n\nIncreases the station's fleet operating limit by <color=green>1</color> per level for levels 11 through 20.",
			"FlavourText": "The Seat is the colloquial term for a majestic complex of offices, domiciles and businesses that effectively serve as the court of the empire.",
			"Role": "CapitalHousing",
			"TierAffinity": [ 0 ],
			"Multiplicity": "Unrestricted",
			"SlotAffinity": "CapitalHousing",
			"StationType": "Normal",
			"CommanderLevelRequired": 20,
			"LevelCap": 20,
			"Stats": [
				{
					"TargetAttribute": "COST_TIME",
					"UseArray": true,
					"ModifierArray": [ 900, 1200, 1600, 1800, 2000, 2200, 2400, 2600, 2800, 3000, 3500, 4000, 5000, 6000, 8000, 10000, 12000, 15000, 16000, 20000 ]
				},
				{
					"TargetAttribute": "COST_MTL",
					"UseArray": true,
					"ModifierArray": [ 8741.25, 8828.6625, 9003.4875, 9353.1375, 9965.025, 10926.5625, 12325.1625, 14248.2375, 16783.2, 20017.4625, 24038.4375, 28933.5375, 35139.825, 43094.3625, 53234.2125, 66433.5, 84003.4125, 107036.6063, 136713.15, 175305.7688 ]
				},
				{
					"TargetAttribute": "COST_GAS",
					"UseArray": true,
					"ModifierArray": [ 8741.25, 8828.6625, 9003.4875, 9353.1375, 9965.025, 10926.5625, 12325.1625, 14248.2375, 16783.2, 20017.4625, 24038.4375, 28933.5375, 35139.825, 43094.3625, 53234.2125, 66433.5, 84003.4125, 107036.6063, 136713.15, 175305.7688 ]
				},
				{
					"TargetAttribute": "COST_CRS",
					"UseArray": true,
					"ModifierArray": [ 8741.25, 8828.6625, 9003.4875, 9353.1375, 9965.025, 10926.5625, 12325.1625, 14248.2375, 16783.2, 20017.4625, 24038.4375, 28933.5375, 35139.825, 43094.3625, 53234.2125, 66433.5, 84003.4125, 107036.6063, 136713.15, 175305.7688 ]
				},
				{
					"TargetAttribute": "STAT_B_HP",
					"UseArray": true,
					"ModifierArray": [ 1500, 3015, 4560, 6165, 7875, 9750, 11865, 14310, 17190, 20625, 24750, 29715, 35745, 43140, 52275, 63675, 78090, 96457.5, 119917.5, 150000 ]
				},
				{
					"TargetAttribute": "STAT_PROD_SPG",
					"UseArray": true,
					"ModifierArray": [ 5, 10.05, 15.2, 20.55, 26.25, 32.5, 39.55, 47.7, 57.3, 68.75, 82.5, 99.05, 119.15, 143.8, 174.25, 212.25, 260.3, 321.53, 399.73, 500 ]
				}
			],
			"Effects": [
				{
					"Origin": "Building",
					"Destination": "Empire",
					"Target": "Commander",
					"TargetAttribute": "OP_TP_PRESTIGE_YIELD",
					"Type": "Modifier",
					"UseArray": true,
					"ModifierArray": [ 5.83, 6.67, 7.5, 8.33, 9.17, 10, 10.83, 11.67, 12.92, 14.17, 15.42, 17.08, 18.75, 20.42, 22.08, 25, 33.33, 41.67, 58.33, 83.33 ]
				},
				{
					"Origin": "Building",
					"Destination": "Station",
					"Target": "Station",
					"TargetAttribute": "STAT_OCT",
					"Type": "Modifier",
					"UseArray": true,
					"ModifierArray": [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ]
				},
				{
					"Origin": "Building",
					"Destination": "Station",
					"Target": "Station",
					"TargetAttribute": "STAT_PROD_ENERGY",
					"Type": "Modifier",
					"UseArray": true,
					"ModifierArray": [ 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000 ]
				}
			]
		}
	],

	"AllianceStationBuildings": [
		{
			"Id": 710,
			"Name": "Century Warehouse",
			"Description": "Increases the maximum amount of each resource this station can store.",
			"ImageId": 999,
			"StringId": "CenturyWarehouse",
			"Role": "General",
			"TierAffinity": [ 0 ],
			"Multiplicity": "StationUnique",
			"SlotAffinity": "Specialization",
			"StationType": "AllianceStation",
			"LevelCap": 10,
			"Stats": [
				{
					"TargetAttribute": "COST_TIME",
					"UseArray": "true",
					"ModifierArray": [ 20.16, 42.84, 69.048, 103.32, 148.176, 196.56, 248.472, 312.48, 391.104, 483.84 ]
				},
				{
					"TargetAttribute": "COST_MTL",
					"UseArray": "true",
					"ModifierArray": [ 9990, 21229, 34216, 51199, 73427, 97403, 123127, 154845, 193806, 239760 ]
				},
				{
					"TargetAttribute": "COST_GAS",
					"UseArray": "true",
					"ModifierArray": [ 9990, 21229, 34216, 51199, 73427, 97403, 123127, 154845, 193806, 239760 ]
				},
				{
					"TargetAttribute": "COST_CRS",
					"UseArray": "true",
					"ModifierArray": [ 9990, 21229, 34216, 51199, 73427, 97403, 123127, 154845, 193806, 239760 ]
				},
				{
					"TargetAttribute": "STAT_B_HP",
					"UseArray": "true",
					"ModifierArray": [ 7500, 23437.5, 49125, 87562.5, 142687.5, 215812.5, 308250, 424500, 570000, 750000 ]
				}
			],
			"Effects": [
				{
					"Origin": "Building",
					"Destination": "Station",
					"Target": "Station",
					"TargetAttribute": "STAT_PROD_CAP",
					"UseArray": "true",
					"ModifierArray": [ 50000, 100000, 150000, 200000, 250000, 350000, 450000, 550000, 650000, 750000 ]
				}
			]
		},
		{
			"Id": 720,
			"Name": "Alliance Command",
			"Description": "Increases the level of the alliance station by 1 per building level.  \n\nIncreases the spy defense of the alliance station by 10 per level.\n\nIncreases the fleets operating limit of alliance assaults by <color=green>2</color> per level.\n\nIncreaseses allowed participants in alliance assaults by <color=green>1</color> per level.",
			"ImageId": 999,
			"StringId": "AllianceCommand",
			"Role": "General",
			"TierAffinity": [ 0 ],
			"Multiplicity": "StationUnique",
			"SlotAffinity": "Specialization",
			"StationType": "AllianceStation",
			"LevelCap": 5,
			"Stats": [
				{
					"TargetAttribute": "COST_TIME",
					"UseArray": "true",
					"ModifierArray": [ 302.4, 453.6, 604.8, 756, 907.2 ]
				},
				{
					"TargetAttribute": "COST_MTL",
					"UseArray": "true",
					"ModifierArray": [ 149850, 224775, 299700, 374625, 449550 ]
				},
				{
					"TargetAttribute": "COST_GAS",
					"UseArray": "true",
					"ModifierArray": [ 149850, 224775, 299700, 374625, 449550 ]
				},
				{
					"TargetAttribute": "COST_CRS",
					"UseArray": "true",
					"ModifierArray": [ 149850, 224775, 299700, 374625, 449550 ]
				},
				{
					"TargetAttribute": "STAT_B_HP",
					"UseArray": "true",
					"ModifierArray": [ 112500, 281250, 506250, 787500, 1125000 ]
				}
			],
			"Effects": [
				{
					"Origin": "Building",
					"Destination": "Empire",
					"Target": "Commander",
					"TargetAttribute": "ALLIANCE_MAX_FLEETS_PER_OPERATION",
					"UseArray": "true",
					"ModifierArray": [ 2, 4, 6, 8, 10 ]
				},
				{
					"Origin": "Building",
					"Destination": "Empire",
					"Target": "Commander",
					"TargetAttribute": "ALLIANCE_MAX_PARTICIPANTS_PER_ASSAULT",
					"UseArray": "true",
					"ModifierArray": [ 1, 2, 3, 4, 5 ]
				}
			]
		},
		{
			"Id": 730,
			"Name": "Alliance Traffic Control",
			"Description": "Increases the speed of alliance memebers when deploying to allied stations, forward operating bases and the alliance station by <color=green>1</color> per level.",
			"ImageId": 999,
			"StringId": "AllianceTrafficControl",
			"Role": "General",
			"TierAffinity": [ 0 ],
			"Multiplicity": "StationUnique",
			"SlotAffinity": "Specialization",
			"StationType": "AllianceStation",
			"LevelCap": 5,
			"Stats": [
				{
					"TargetAttribute": "COST_TIME",
					"UseArray": "true",
					"ModifierArray": [ 100.8, 151.2, 201.6, 252, 302.4 ]
				},
				{
					"TargetAttribute": "COST_MTL",
					"UseArray": "true",
					"ModifierArray": [ 49950, 74925, 99900, 124875, 149850 ]
				},
				{
					"TargetAttribute": "COST_GAS",
					"UseArray": "true",
					"ModifierArray": [ 49950, 74925, 99900, 124875, 149850 ]
				},
				{
					"TargetAttribute": "COST_CRS",
					"UseArray": "true",
					"ModifierArray": [ 49950, 74925, 99900, 124875, 149850 ]
				},
				{
					"TargetAttribute": "STAT_B_HP",
					"UseArray": "true",
					"ModifierArray": [ 37500, 93750, 168750, 262500, 375000 ]
				}
			],
			"Effects": [
				{
					"Origin": "Building",
					"Destination": "AllianceStations",
					"Target": "Station",
					"TargetAttribute": "STAT_ALLIED_DEPLOYMENT_BOOST",
					"UseArray": "true",
					"ModifierArray": [ 1, 2, 3, 4, 5 ]
				}
			]
		},
		{
			"Id": 740,
			"Name": "Federate Manufacturers",
			"Description": "Allows the construction of units in the alliance station.\n\nReduces unit time cost by <color=green>25%</color> per level.\n\nLevel 1 unlocks light units.\nLevel 2 unlocks heavy units.\nLevel 3 unlocks capital units.",
			"ImageId": 999,
			"StringId": "FederateManufacturers",
			"Role": "General",
			"TierAffinity": [ 0 ],
			"Multiplicity": "StationUnique",
			"SlotAffinity": "Specialization",
			"StationType": "AllianceStation",
			"LevelCap": 3,
			"Stats": [
				{
					"TargetAttribute": "COST_TIME",
					"UseArray": "true",
					"ModifierArray": [ 604.8, 907.2, 1512 ]
				},
				{
					"TargetAttribute": "COST_MTL",
					"UseArray": "true",
					"ModifierArray": [ 299700, 449550, 749250 ]
				},
				{
					"TargetAttribute": "COST_GAS",
					"UseArray": "true",
					"ModifierArray": [ 299700, 449550, 749250 ]
				},
				{
					"TargetAttribute": "COST_CRS",
					"UseArray": "true",
					"ModifierArray": [ 299700, 449550, 749250 ]
				},
				{
					"TargetAttribute": "STAT_B_HP",
					"UseArray": "true",
					"ModifierArray": [ 225000, 562500, 1125000 ]
				}
			],
			"Effects": [
				{
					"Origin": "Building",
					"Destination": "Station",
					"Target": "Fleet",
					"TargetAttribute": "COST_TIME",
					"Modifier": "PercentageModifier",
					"UseArray": "true",
					"ModifierArray": [ -0.25, -0.5, -0.75 ]
				}
			],
			"LevelRestrictedEffects": {
				"1": [
					{
						"Origin": "Building",
						"Destination": "Station",
						"Target": "Station",
						"TargetAttribute": "STAT_CONSTRUCT_SMALL_SHIPS",
						"Base": 1,
						"CalculationMethod": 6
					}
				],
				"2": [
					{
						"Origin": "Building",
						"Destination": "Station",
						"Target": "Station",
						"TargetAttribute": "STAT_CONSTRUCT_HEAVY_SHIPS",
						"Base": 1,
						"CalculationMethod": 6
					}
				],
				"3": [
					{
						"Origin": "Building",
						"Destination": "Station",
						"Target": "Station",
						"TargetAttribute": "STAT_CONSTRUCT_CAPITAL_SHIPS",
						"Base": 1,
						"CalculationMethod": 6
					}
				]
			}
		},
		{
			"Id": 750,
			"Name": "Alliance Logistics Base",
			"Description": "Increases the fleet operting limit of the alliance station by <color=green>2</color> per level.",
			"ImageId": 999,
			"StringId": "AllianceLogisticsBase",
			"Role": "General",
			"TierAffinity": [ 0 ],
			"Multiplicity": "StationUnique",
			"SlotAffinity": "Specialization",
			"StationType": "AllianceStation",
			"LevelCap": 10,
			"Stats": [
				{
					"TargetAttribute": "COST_TIME",
					"UseArray": "true",
					"ModifierArray": [ 30.24, 64.26, 103.572, 154.98, 222.264, 294.84, 372.708, 468.72, 586.656, 725.76 ]
				},
				{
					"TargetAttribute": "COST_MTL",
					"UseArray": "true",
					"ModifierArray": [ 14985, 31844, 51324, 76799, 110140, 146104, 184691, 232268, 290709, 359640 ]
				},
				{
					"TargetAttribute": "COST_GAS",
					"UseArray": "true",
					"ModifierArray": [ 14985, 31844, 51324, 76799, 110140, 146104, 184691, 232268, 290709, 359640 ]
				},
				{
					"TargetAttribute": "COST_CRS",
					"UseArray": "true",
					"ModifierArray": [ 14985, 31844, 51324, 76799, 110140, 146104, 184691, 232268, 290709, 359640 ]
				},
				{
					"TargetAttribute": "STAT_B_HP",
					"UseArray": "true",
					"ModifierArray": [ 11250, 35156.25, 73687.5, 131343.75, 214031.25, 323718.75, 462375, 636750, 855000, 1125000 ]
				}
			],
			"Effects": [
				{
					"Origin": "Building",
					"Destination": "Station",
					"Target": "Station",
					"TargetAttribute": "STAT_OCT",
					"UseArray": "true",
					"ModifierArray": [ 2, 4, 6, 8, 10, 12, 14, 16, 18, 20 ]
				}
			]
		},
		{
			"Id": 760,
			"Name": "Operations Center",
			"Description": "Allows the construction and operation of <color=green>1</color> Forward Operating Base per level.",
			"ImageId": 999,
			"StringId": "OperationsCenter",
			"Role": "General",
			"TierAffinity": [ 0 ],
			"Multiplicity": "StationUnique",
			"SlotAffinity": "Specialization",
			"StationType": "AllianceStation",
			"LevelCap": 3,
			"Stats": [
				{
					"TargetAttribute": "COST_TIME",
					"UseArray": "true",
					"ModifierArray": [ 604.8, 907.2, 1512 ]
				},
				{
					"TargetAttribute": "COST_MTL",
					"UseArray": "true",
					"ModifierArray": [ 299700, 449550, 749250 ]
				},
				{
					"TargetAttribute": "COST_GAS",
					"UseArray": "true",
					"ModifierArray": [ 299700, 449550, 749250 ]
				},
				{
					"TargetAttribute": "COST_CRS",
					"UseArray": "true",
					"ModifierArray": [ 299700, 449550, 749250 ]
				},
				{
					"TargetAttribute": "STAT_B_HP",
					"UseArray": "true",
					"ModifierArray": [ 225000, 562500, 1125000 ]
				}
			],
			"Effects": [
				{
					"Origin": "Building",
					"Destination": "Empire",
					"Target": "Commander",
					"TargetAttribute": "FOB_MAX_COUNT",
					"UseArray": "true",
					"ModifierArray": [ 1, 2, 3 ]
				}
			]
		},
		{
			"Id": 770,
			"Name": "Federal Armory",
			"Description": "<color=green>[ +1 | +5 | +25 ]</color> firepower for allied combat and raiding fleets.\n\n<color=green>[ +2.5 | +12.5 | +62.5 ]</color> hit points for allied combat and raiding fleets.",
			"ImageId": 999,
			"StringId": "FederalArmory",
			"Role": "General",
			"TierAffinity": [ 0 ],
			"Multiplicity": "StationUnique",
			"SlotAffinity": "Specialization",
			"StationType": "AllianceStation",
			"LevelCap": 10,
			"Stats": [
				{
					"TargetAttribute": "COST_TIME",
					"UseArray": "true",
					"ModifierArray": [ 50.4, 107.1, 172.62, 258.3, 370.44, 491.4, 621.18, 781.2, 977.76, 1209.6 ]
				},
				{
					"TargetAttribute": "COST_MTL",
					"UseArray": "true",
					"ModifierArray": [ 24975, 53072, 85540, 127997, 183567, 243507, 307817, 387113, 484515, 599400 ]
				},
				{
					"TargetAttribute": "COST_GAS",
					"UseArray": "true",
					"ModifierArray": [ 24975, 53072, 85540, 127997, 183567, 243507, 307817, 387113, 484515, 599400 ]
				},
				{
					"TargetAttribute": "COST_CRS",
					"UseArray": "true",
					"ModifierArray": [ 24975, 53072, 85540, 127997, 183567, 243507, 307817, 387113, 484515, 599400 ]
				},
				{
					"TargetAttribute": "STAT_B_HP",
					"UseArray": "true",
					"ModifierArray": [ 18750, 58593.75, 122812.5, 218906.25, 356718.75, 539531.25, 770625, 1061250, 1425000, 1875000 ]
				}
			],
			"Effects": [
				{
					"Origin": "Building",
					"Destination": "AllianceFleets",
					"Target": "SmallShips",
					"TargetAttribute": "UNIT_FIREPOWER",
					"UseArray": "true",
					"ModifierArray": [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ]
				},
				{
					"Origin": "Building",
					"Destination": "AllianceFleets",
					"Target": "LargeShips",
					"TargetAttribute": "UNIT_FIREPOWER",
					"UseArray": "true",
					"ModifierArray": [ 5, 10, 15, 20, 25, 30, 35, 40, 45, 50 ]
				},
				{
					"Origin": "Building",
					"Destination": "AllianceFleets",
					"Target": "CapitalShips",
					"TargetAttribute": "UNIT_FIREPOWER",
					"UseArray": "true",
					"ModifierArray": [ 25, 50, 75, 100, 125, 150, 175, 200, 225, 250 ]
				},
				{
					"Origin": "Building",
					"Destination": "AllianceFleets",
					"Target": "SmallShips",
					"TargetAttribute": "UNIT_HP",
					"UseArray": "true",
					"ModifierArray": [ 2.5, 5, 7.5, 10, 12.5, 15, 17.5, 20, 22.5, 25 ]
				},
				{
					"Origin": "Building",
					"Destination": "AllianceFleets",
					"Target": "LargeShips",
					"TargetAttribute": "UNIT_HP",
					"UseArray": "true",
					"ModifierArray": [ 12.5, 25, 37.5, 50, 62.5, 75, 87.5, 100, 112.5, 125 ]
				},
				{
					"Origin": "Building",
					"Destination": "AllianceFleets",
					"Target": "CapitalShips",
					"TargetAttribute": "UNIT_HP",
					"UseArray": "true",
					"ModifierArray": [ 62.5, 125, 187.5, 250, 312.5, 375, 437.5, 500, 562.5, 625 ]
				}
			]
		}
	],

	"FobBuildings": [
		{
			"Id": 910,
			"Name": "Drive Core",
			"Description": "Decreases the Forward Operating Base's jump preparation time by <color=green>2</color> hours per level.",
			"ImageId": 999,
			"StringId": "DriveCore",
			"Role": "General",
			"TierAffinity": [ 0 ],
			"Multiplicity": "StationUnique",
			"SlotAffinity": "Specialization",
			"StationType": "ForwardBase",
			"LevelCap": 5,
			"Stats": [
				{
					"TargetAttribute": "COST_TIME",
					"UseArray": "true",
					"ModifierArray": [ 115.2, 230.4, 345.6, 691.2, 921.6 ]
				},
				{
					"TargetAttribute": "COST_MTL",
					"UseArray": "true",
					"ModifierArray": [ 149850, 224775, 299700, 374625, 449550 ]
				},
				{
					"TargetAttribute": "COST_GAS",
					"UseArray": "true",
					"ModifierArray": [ 149850, 224775, 299700, 374625, 449550 ]
				},
				{
					"TargetAttribute": "COST_CRS",
					"UseArray": "true",
					"ModifierArray": [ 149850, 224775, 299700, 374625, 449550 ]
				},
				{
					"TargetAttribute": "STAT_B_HP",
					"UseArray": "true",
					"ModifierArray": [ 150000, 375000, 675000, 1050000, 1500000 ]
				}
			],
			"Effects": [
				{
					"Origin": "Building",
					"Destination": "Station",
					"Target": "Station",
					"TargetAttribute": "FOB_JUMP_PREP_TIME",
					"UseArray": "true",
					"ModifierArray": [ -2, -4, -6, -8, -10 ]
				}
			]
		},
		{
			"Id": 920,
			"Name": "Particle Accelerator",
			"Description": "Increases the Forward Operating Base's jump range by <color=green>5</color> per level.",
			"ImageId": 999,
			"StringId": "ParticleAccelerator",
			"Role": "General",
			"TierAffinity": [ 0 ],
			"Multiplicity": "StationUnique",
			"SlotAffinity": "Specialization",
			"StationType": "ForwardBase",
			"LevelCap": 10,
			"Stats": [
				{
					"TargetAttribute": "COST_TIME",
					"UseArray": "true",
					"ModifierArray": [ 11.52, 24.48, 39.456, 59.04, 84.672, 112.32, 141.984, 178.56, 223.488, 276.48 ]
				},
				{
					"TargetAttribute": "COST_MTL",
					"UseArray": "true",
					"ModifierArray": [ 9990, 20646, 31968, 43956, 56610, 69930, 83916, 99234, 115884, 133866 ]
				},
				{
					"TargetAttribute": "COST_GAS",
					"UseArray": "true",
					"ModifierArray": [ 9990, 20646, 31968, 43956, 56610, 69930, 83916, 99234, 115884, 133866 ]
				},
				{
					"TargetAttribute": "COST_CRS",
					"UseArray": "true",
					"ModifierArray": [ 9990, 20646, 31968, 43956, 56610, 69930, 83916, 99234, 115884, 133866 ]
				},
				{
					"TargetAttribute": "STAT_B_HP",
					"UseArray": "true",
					"ModifierArray": [ 30000, 62000, 96000, 132000, 170000, 210000, 252000, 298000, 348000, 402000 ]
				}
			],
			"Effects": [
				{
					"Origin": "Building",
					"Destination": "Station",
					"Target": "Station",
					"TargetAttribute": "FOB_LOCAL_JUMP_RANGE",
					"UseArray": "true",
					"ModifierArray": [ 5, 10, 15, 20, 25, 30, 35, 40, 45, 50 ]
				}
			]
		},
		{
			"Id": 930,
			"Name": "Navigation Beacon",
			"Description": "Increases the speed of incoming deployments by <color=green>5</color> per level.",
			"ImageId": 999,
			"StringId": "NavigationBeacon",
			"Role": "General",
			"TierAffinity": [ 0 ],
			"Multiplicity": "StationUnique",
			"SlotAffinity": "Specialization",
			"StationType": "ForwardBase",
			"LevelCap": 5,
			"Stats": [
				{
					"TargetAttribute": "COST_TIME",
					"UseArray": "true",
					"ModifierArray": [ 28.8, 57.6, 86.4, 172.8, 230.4 ]
				},
				{
					"TargetAttribute": "COST_MTL",
					"UseArray": "true",
					"ModifierArray": [ 33300, 49950, 66600, 83250, 99900 ]
				},
				{
					"TargetAttribute": "COST_GAS",
					"UseArray": "true",
					"ModifierArray": [ 33300, 49950, 66600, 83250, 99900 ]
				},
				{
					"TargetAttribute": "COST_CRS",
					"UseArray": "true",
					"ModifierArray": [ 33300, 49950, 66600, 83250, 99900 ]
				},
				{
					"TargetAttribute": "STAT_B_HP",
					"UseArray": "true",
					"ModifierArray": [ 50000, 125000, 225000, 350000, 500000 ]
				}
			],
			"Effects": [
				{
					"Origin": "Building",
					"Destination": "Station",
					"Target": "Station",
					"TargetAttribute": "STAT_ALLIED_DEPLOYMENT_BOOST",
					"UseArray": "true",
					"ModifierArray": [ 5, 10, 15, 20, 25 ]
				}
			]
		},
		{
			"Id": 940,
			"Name": "Hangar Bay",
			"Description": "Increases the fleet operting limit of the Forward Operating Base by <color=green>4</color> per level.",
			"ImageId": 999,
			"StringId": "HangarBay",
			"Role": "General",
			"TierAffinity": [ 0 ],
			"Multiplicity": "StationUnique",
			"SlotAffinity": "Specialization",
			"StationType": "ForwardBase",
			"LevelCap": 5,
			"Stats": [
				{
					"TargetAttribute": "COST_TIME",
					"UseArray": "true",
					"ModifierArray": [ 115.2, 172.8, 230.4, 288, 345.6 ]
				},
				{
					"TargetAttribute": "COST_MTL",
					"UseArray": "true",
					"ModifierArray": [ 49950, 74925, 99900, 124875, 149850 ]
				},
				{
					"TargetAttribute": "COST_GAS",
					"UseArray": "true",
					"ModifierArray": [ 49950, 74925, 99900, 124875, 149850 ]
				},
				{
					"TargetAttribute": "COST_CRS",
					"UseArray": "true",
					"ModifierArray": [ 49950, 74925, 99900, 124875, 149850 ]
				},
				{
					"TargetAttribute": "STAT_B_HP",
					"UseArray": "true",
					"ModifierArray": [ 100000, 250000, 450000, 700000, 1000000 ]
				}
			],
			"Effects": [
				{
					"Origin": "Building",
					"Destination": "Station",
					"Target": "Station",
					"TargetAttribute": "STAT_OCT",
					"UseArray": "true",
					"ModifierArray": [ 4, 8, 12, 16, 20 ]
				}
			]
		},
		{
			"Id": 950,
			"Name": "Cargo Bay",
			"Description": "Increases the maximum amount of each resource the Forward Operating Base can store.",
			"ImageId": 999,
			"StringId": "CargoBay",
			"Role": "General",
			"TierAffinity": [ 0 ],
			"Multiplicity": "StationUnique",
			"SlotAffinity": "Specialization",
			"StationType": "ForwardBase",
			"LevelCap": 10,
			"Stats": [
				{
					"TargetAttribute": "COST_TIME",
					"UseArray": "true",
					"ModifierArray": [ 5.76, 12.24, 19.728, 29.52, 42.336, 56.16, 70.992, 89.28, 111.744, 138.24 ]
				},
				{
					"TargetAttribute": "COST_MTL",
					"UseArray": "true",
					"ModifierArray": [ 4995, 10323, 15984, 21978, 28305, 34965, 41958, 49617, 57942, 66933 ]
				},
				{
					"TargetAttribute": "COST_GAS",
					"UseArray": "true",
					"ModifierArray": [ 4995, 10323, 15984, 21978, 28305, 34965, 41958, 49617, 57942, 66933 ]
				},
				{
					"TargetAttribute": "COST_CRS",
					"UseArray": "true",
					"ModifierArray": [ 4995, 10323, 15984, 21978, 28305, 34965, 41958, 49617, 57942, 66933 ]
				},
				{
					"TargetAttribute": "STAT_B_HP",
					"UseArray": "true",
					"ModifierArray": [ 15000, 31000, 48000, 66000, 85000, 105000, 126000, 149000, 174000, 201000 ]
				}
			],
			"Effects": [
				{
					"Origin": "Building",
					"Destination": "Station",
					"Target": "Station",
					"TargetAttribute": "STAT_PROD_CAP",
					"UseArray": "true",
					"ModifierArray": [ 25000, 50000, 100000, 150000, 200000, 300000, 400000, 500000, 750000, 1000000 ]
				}
			]
		}
	],

	"SuperStructureBuildings": [
		{
			"Id": 810,
			"Name": "Ring Structure",
			"Description": "Increases the fleet operating limit of the Dyson Sphere by <color=green>2</color> per level.",
			"ImageId": 999,
			"StringId": "RingStructure",
			"Role": "General",
			"TierAffinity": [ 0 ],
			"Multiplicity": "StationUnique",
			"SlotAffinity": "Specialization",
			"StationType": "SuperStructure",
			"LevelCap": 10,
			"Stats": [
				{
					"TargetAttribute": "COST_TIME",
					"UseArray": "true",
					"ModifierArray": [ 70.56, 149.94, 241.67, 361.62, 518.62, 687.96, 869.65, "1,093.68", "1,368.86", "1,693.44" ]
				},
				{
					"TargetAttribute": "COST_MTL",
					"UseArray": "true",
					"ModifierArray": [ 55500, 117937.5, 190087.5, 284437.5, 407925, 541125, 684037.5, 860250, 1076700, 1332000 ]
				},
				{
					"TargetAttribute": "COST_GAS",
					"UseArray": "true",
					"ModifierArray": [ 55500, 117937.5, 190087.5, 284437.5, 407925, 541125, 684037.5, 860250, 1076700, 1332000 ]
				},
				{
					"TargetAttribute": "COST_CRS",
					"UseArray": "true",
					"ModifierArray": [ 55500, 117937.5, 190087.5, 284437.5, 407925, 541125, 684037.5, 860250, 1076700, 1332000 ]
				},
				{
					"TargetAttribute": "STAT_B_HP",
					"UseArray": "true",
					"ModifierArray": [ "10,000", "31,250", "65,500", "116,750", "190,250", "287,750", "411,000", "566,000", "760,000", "1,000,000" ]
				}
			],
			"Effects": [
				{
					"Origin": "Building",
					"Destination": "Station",
					"Target": "Station",
					"TargetAttribute": "STAT_OCT",
					"Type": "Modifier",
					"UseArray": true,
					"ModifierArray": [ 2, 4, 6, 8, 10, 12, 14, 16, 18, 20 ]
				}
			]
		},
		{
			"Id": 820,
			"Name": "Dyson Shell",
			"Description": "The alliance controlling the Dyson Sphere with the highest level of this building at the end of the game claims industrial victory.",
			"ImageId": 999,
			"StringId": "DysonShell",
			"Role": "General",
			"TierAffinity": [ 0 ],
			"Multiplicity": "StationUnique",
			"SlotAffinity": "Specialization",
			"StationType": "SuperStructure",
			"LevelCap": 100,
			"Stats": [
				{
					"TargetAttribute": "COST_TIME",
					"UseArray": "true",
					"ModifierArray": [ 50, 58, 66, 73, 81, 88, 96, 104, 111, 119, 126, 134, 141, 149, 157, 164, 172, 179, 187, 194, 202, 210, 217, 225, 232, 240, 247, 255, 263, 270, 278, 285, 293, 300, 308, 316, 323, 331, 338, 346, 353, 361, 369, 376, 384, 391, 399, 406, 414, 422, 434, 447, 459, 472, 485, 497, 510, 523, 535, 548, 560, 573, 586, 598, 611, 624, 636, 649, 661, 674, 687, 699, 712, 725, 737, 767, 798, 828, 858, 889, 919, 949, 980, "1,010", "1,040", "1,070", "1,101", "1,131", "1,161", "1,192", "1,222", "1,252", "1,282", "1,313", "1,343", "1,373", "1,404", "1,434", "1,464", "1,495" ]
				},
				{
					"TargetAttribute": "COST_MTL",
					"UseArray": "true",
					"ModifierArray": [ 65777.77778, 72355.55556, 78933.33333, 85511.11111, 92088.88889, 98666.66667, 105244.4444, 111822.2222, 118400, 124977.7778, 131555.5556, 138133.3333, 144711.1111, 151288.8889, 157866.6667, 164444.4444, 171022.2222, 177600, 184177.7778, 190755.5556, 197333.3333, 203911.1111, 210488.8889, 217066.6667, 223644.4444, 230222.2222, 236800, 243377.7778, 249955.5556, 256533.3333, 263111.1111, 269688.8889, 276266.6667, 282844.4444, 289422.2222, 296000, 302577.7778, 309155.5556, 315733.3333, 322311.1111, 328888.8889, 335466.6667, 342044.4444, 348622.2222, 355200, 361777.7778, 368355.5556, 374933.3333, 381511.1111, 388088.8889, 401244.4444, 414400, 427555.5556, 440711.1111, 453866.6667, 467022.2222, 480177.7778, 493333.3333, 506488.8889, 519644.4444, 532800, 545955.5556, 559111.1111, 572266.6667, 585422.2222, 598577.7778, 611733.3333, 624888.8889, 638044.4444, 651200, 664355.5556, 677511.1111, 690666.6667, 703822.2222, 716977.7778, 743288.8889, 769600, 795911.1111, 822222.2222, 848533.3333, 874844.4444, 901155.5556, 927466.6667, 953777.7778, 980088.8889, 1006400, 1032711.111, 1059022.222, 1085333.333, 1111644.444, 1137955.556, 1164266.667, 1190577.778, 1216888.889, 1243200, 1269511.111, 1295822.222, 1322133.333, 1348444.444, 1374755.556 ]
				},
				{
					"TargetAttribute": "COST_GAS",
					"UseArray": "true",
					"ModifierArray": [ 65777.77778, 72355.55556, 78933.33333, 85511.11111, 92088.88889, 98666.66667, 105244.4444, 111822.2222, 118400, 124977.7778, 131555.5556, 138133.3333, 144711.1111, 151288.8889, 157866.6667, 164444.4444, 171022.2222, 177600, 184177.7778, 190755.5556, 197333.3333, 203911.1111, 210488.8889, 217066.6667, 223644.4444, 230222.2222, 236800, 243377.7778, 249955.5556, 256533.3333, 263111.1111, 269688.8889, 276266.6667, 282844.4444, 289422.2222, 296000, 302577.7778, 309155.5556, 315733.3333, 322311.1111, 328888.8889, 335466.6667, 342044.4444, 348622.2222, 355200, 361777.7778, 368355.5556, 374933.3333, 381511.1111, 388088.8889, 401244.4444, 414400, 427555.5556, 440711.1111, 453866.6667, 467022.2222, 480177.7778, 493333.3333, 506488.8889, 519644.4444, 532800, 545955.5556, 559111.1111, 572266.6667, 585422.2222, 598577.7778, 611733.3333, 624888.8889, 638044.4444, 651200, 664355.5556, 677511.1111, 690666.6667, 703822.2222, 716977.7778, 743288.8889, 769600, 795911.1111, 822222.2222, 848533.3333, 874844.4444, 901155.5556, 927466.6667, 953777.7778, 980088.8889, 1006400, 1032711.111, 1059022.222, 1085333.333, 1111644.444, 1137955.556, 1164266.667, 1190577.778, 1216888.889, 1243200, 1269511.111, 1295822.222, 1322133.333, 1348444.444, 1374755.556 ]
				},
				{
					"TargetAttribute": "COST_CRS",
					"UseArray": "true",
					"ModifierArray": [ 65777.77778, 72355.55556, 78933.33333, 85511.11111, 92088.88889, 98666.66667, 105244.4444, 111822.2222, 118400, 124977.7778, 131555.5556, 138133.3333, 144711.1111, 151288.8889, 157866.6667, 164444.4444, 171022.2222, 177600, 184177.7778, 190755.5556, 197333.3333, 203911.1111, 210488.8889, 217066.6667, 223644.4444, 230222.2222, 236800, 243377.7778, 249955.5556, 256533.3333, 263111.1111, 269688.8889, 276266.6667, 282844.4444, 289422.2222, 296000, 302577.7778, 309155.5556, 315733.3333, 322311.1111, 328888.8889, 335466.6667, 342044.4444, 348622.2222, 355200, 361777.7778, 368355.5556, 374933.3333, 381511.1111, 388088.8889, 401244.4444, 414400, 427555.5556, 440711.1111, 453866.6667, 467022.2222, 480177.7778, 493333.3333, 506488.8889, 519644.4444, 532800, 545955.5556, 559111.1111, 572266.6667, 585422.2222, 598577.7778, 611733.3333, 624888.8889, 638044.4444, 651200, 664355.5556, 677511.1111, 690666.6667, 703822.2222, 716977.7778, 743288.8889, 769600, 795911.1111, 822222.2222, 848533.3333, 874844.4444, 901155.5556, 927466.6667, 953777.7778, 980088.8889, 1006400, 1032711.111, 1059022.222, 1085333.333, 1111644.444, 1137955.556, 1164266.667, 1190577.778, 1216888.889, 1243200, 1269511.111, 1295822.222, 1322133.333, 1348444.444, 1374755.556 ]
				},
				{
					"TargetAttribute": "STAT_B_HP",
					"UseArray": "true",
					"ModifierArray": [ "4,263", "8,952", "14,068", "19,610", "25,578", "31,972", "38,793", "46,040", "53,713", "61,813", "70,339", "79,291", "88,670", "98,474", "108,706", "119,363", "130,447", "141,957", "153,893", "166,256", "179,044", "192,260", "205,901", "219,969", "234,463", "249,383", "264,730", "280,503", "296,702", "313,328", "330,380", "347,858", "365,762", "384,093", "402,850", "422,033", "441,643", "461,679", "482,141", "503,030", "524,344", "546,086", "568,253", "590,847", "613,867", "637,313", "661,186", "685,484", "710,210", "735,361", "761,152", "787,582", "814,652", "842,361", "870,710", "899,698", "929,326", "959,593", "990,499", "1,022,045", "1,054,231", "1,087,056", "1,120,520", "1,154,624", "1,189,367", "1,224,749", "1,260,771", "1,297,433", "1,334,734", "1,372,674", "1,411,254", "1,450,473", "1,490,332", "1,530,830", "1,571,968", "1,613,958", "1,656,801", "1,700,496", "1,745,044", "1,790,444", "1,836,698", "1,883,803", "1,931,762", "1,980,573", "2,030,236", "2,080,752", "2,132,121", "2,184,342", "2,237,416", "2,291,343", "2,346,122", "2,401,753", "2,458,238", "2,515,574", "2,573,764", "2,632,806", "2,692,701", "2,753,448", "2,815,048", "2,877,500" ]
				}
			]
		},
		{
			"Id": 830,
			"Name": "Magazine",
			"Description": "Increases the maximum amount of each resource the Dyson Sphere can store.",
			"ImageId": 999,
			"StringId": "Magazine",
			"Role": "General",
			"TierAffinity": [ 0 ],
			"Multiplicity": "StationUnique",
			"SlotAffinity": "Specialization",
			"StationType": "SuperStructure",
			"LevelCap": 10,
			"Stats": [
				{
					"TargetAttribute": "COST_TIME",
					"UseArray": "true",
					"ModifierArray": [ 70.56, 149.94, 241.67, 361.62, 518.62, 687.96, 869.65, "1,093.68", "1,368.86", "1,693.44" ]
				},
				{
					"TargetAttribute": "COST_MTL",
					"UseArray": "true",
					"ModifierArray": [ 30833.33333, 65520.83333, 105604.1667, 158020.8333, 226625, 300625, 380020.8333, 477916.6667, 598166.6667, 740000 ]
				},
				{
					"TargetAttribute": "COST_GAS",
					"UseArray": "true",
					"ModifierArray": [ 30833.33333, 65520.83333, 105604.1667, 158020.8333, 226625, 300625, 380020.8333, 477916.6667, 598166.6667, 740000 ]
				},
				{
					"TargetAttribute": "COST_CRS",
					"UseArray": "true",
					"ModifierArray": [ 30833.33333, 65520.83333, 105604.1667, 158020.8333, 226625, 300625, 380020.8333, 477916.6667, 598166.6667, 740000 ]
				},
				{
					"TargetAttribute": "STAT_B_HP",
					"UseArray": "true",
					"ModifierArray": [ "10,000", "31,250", "65,500", "116,750", "190,250", "287,750", "411,000", "566,000", "760,000", "1,000,000" ]
				}
			],
			"Effects": [
				{
					"Origin": "Building",
					"Destination": "Station",
					"Target": "Station",
					"TargetAttribute": "STAT_PROD_CAP",
					"Type": "Modifier",
					"UseArray": true,
					"ModifierArray": [ 100000, 200000, 300000, 400000, 550000, 700000, 850000, 1000000, 1200000, 1400000 ]
				}
			]
		},
		{
			"Id": 850,
			"Name": "Navigation Beacon",
			"Description": "Increases the speed of incoming deployments by <color=green>1</color> per level.",
			"ImageId": 999,
			"StringId": "NavigationBeacon",
			"Role": "General",
			"TierAffinity": [ 0 ],
			"Multiplicity": "StationUnique",
			"SlotAffinity": "Specialization",
			"StationType": "SuperStructure",
			"LevelCap": 5,
			"Stats": [
				{
					"TargetAttribute": "COST_TIME",
					"UseArray": "true",
					"ModifierArray": [ 172.87, 259.31, 345.74, 432.18, 518.62 ]
				},
				{
					"TargetAttribute": "COST_MTL",
					"UseArray": "true",
					"ModifierArray": [ 123333.3333, 185000, 246666.6667, 308333.3333, 370000, 0, 0, 0, 0, 0 ]
				},
				{
					"TargetAttribute": "COST_GAS",
					"UseArray": "true",
					"ModifierArray": [ 123333.3333, 185000, 246666.6667, 308333.3333, 370000, 0, 0, 0, 0, 0 ]
				},
				{
					"TargetAttribute": "COST_CRS",
					"UseArray": "true",
					"ModifierArray": [ 123333.3333, 185000, 246666.6667, 308333.3333, 370000, 0, 0, 0, 0, 0 ]
				},
				{
					"TargetAttribute": "STAT_B_HP",
					"UseArray": "true",
					"ModifierArray": [ "12,250", "30,625", "55,125", "85,750", "122,500" ]
				}
			],
			"Effects": [
				{
					"Origin": "Building",
					"Destination": "Station",
					"Target": "Station",
					"TargetAttribute": "STAT_ALLIED_DEPLOYMENT_BOOST",
					"Type": "Modifier",
					"UseArray": true,
					"ModifierArray": [ 1, 2, 3, 4, 5 ]
				}
			]
		}
	]
};
