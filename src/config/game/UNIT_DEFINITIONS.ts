//Starborne\starborne-live\Starborne_Data\TempServerData\Release_98
//https://starbornemedia.blob.core.windows.net/servers/Release_98/LOCALIZATION_MISSIONS_OFFENSE.json

export default {
	"CostModifier": 1.0,
	"ProductionTimeModifier": 1.0,
	"MoveSpeedModifier": 1.0,

	"StandardOperations": [ 0, 1, 2, 4, 11 ],
	"FleetExperienceLevelThresholds": [ 0, 750, 3000, 9000 ],

	"StatProgression": [
		{
			"Target": "LightAssault",
			"TargetAttribute": "UNIT_FIREPOWER",
			"Type": "Modifier",
			"UseArray": "true",
			"ModifierArray": [
				0,
				6,
				12,
				18
			]
		},
		{
			"Target": "LightAssault",
			"TargetAttribute": "UNIT_CARGO",
			"Type": "Modifier",
			"UseArray": "true",
			"ModifierArray": [
				0,
				2,
				4,
				6
			]
		},
		{
			"Target": "LightDefense",
			"TargetAttribute": "UNIT_HP",
			"Type": "Modifier",
			"UseArray": "true",
			"ModifierArray": [
				0,
				10,
				20,
				30
			]
		},
		{
			"Target": "LightDefense",
			"TargetAttribute": "UNIT_FIREPOWER",
			"Type": "Modifier",
			"UseArray": "true",
			"ModifierArray": [
				0,
				4,
				8,
				12
			]
		},
		{
			"Target": "HeavyAssault",
			"TargetAttribute": "UNIT_FIREPOWER",
			"Type": "Modifier",
			"UseArray": "true",
			"ModifierArray": [
				0,
				30,
				60,
				90
			]
		},
		{
			"Target": "HeavyAssault",
			"TargetAttribute": "UNIT_CARGO",
			"Type": "Modifier",
			"UseArray": "true",
			"ModifierArray": [
				0,
				8,
				16,
				24
			]
		},
		{
			"Target": "HeavyDefense",
			"TargetAttribute": "UNIT_HP",
			"Type": "Modifier",
			"UseArray": "true",
			"ModifierArray": [
				0,
				50,
				100,
				150
			]
		},
		{
			"Target": "HeavyDefense",
			"TargetAttribute": "UNIT_FIREPOWER",
			"Type": "Modifier",
			"UseArray": "true",
			"ModifierArray": [
				0,
				20,
				40,
				60
			]
		},
		{
			"Target": "Carrier",
			"TargetAttribute": "UNIT_HP",
			"Type": "Modifier",
			"UseArray": "true",
			"ModifierArray": [
				0,
				250,
				500,
				750
			]
		},
		{
			"Target": "Carrier",
			"TargetAttribute": "UNIT_FIREPOWER",
			"Type": "Modifier",
			"UseArray": "true",
			"ModifierArray": [
				0,
				100,
				200,
				300
			]
		},
		{
			"Target": "Dreadnought",
			"TargetAttribute": "UNIT_FIREPOWER",
			"Type": "Modifier",
			"UseArray": "true",
			"ModifierArray": [
				0,
				180,
				360,
				540
			]
		},
		{
			"Target": "Dreadnought",
			"TargetAttribute": "UNIT_BOMB",
			"Type": "Modifier",
			"UseArray": "true",
			"ModifierArray": [
				0,
				10,
				20,
				30
			]
		},
		{
			"Target": "Bomber",
			"TargetAttribute": "UNIT_HP",
			"Type": "Modifier",
			"UseArray": "true",
			"ModifierArray": [
				0,
				50,
				100,
				150
			]
		},
		{
			"Target": "Bomber",
			"TargetAttribute": "UNIT_FIREPOWER",
			"Type": "Modifier",
			"UseArray": "true",
			"ModifierArray": [
				0,
				20,
				40,
				60
			]
		},
		{
			"Target": "Bomber",
			"TargetAttribute": "UNIT_BOMB",
			"Type": "Modifier",
			"UseArray": "true",
			"ModifierArray": [
				0,
				8,
				16,
				24
			]
		},
		{
			"Target": "Industrial",
			"TargetAttribute": "UNIT_SPD",
			"Type": "Modifier",
			"UseArray": "true",
			"ModifierArray": [
				0,
				1,
				2,
				3
			]
		},
		{
			"Target": "Scout",
			"TargetAttribute": "UNIT_HP",
			"Type": "Modifier",
			"UseArray": "true",
			"ModifierArray": [
				0,
				8.75,
				17.5,
				26.25
			]
		},
		{
			"Target": "Scout",
			"TargetAttribute": "UNIT_FIREPOWER",
			"Type": "Modifier",
			"UseArray": "true",
			"ModifierArray": [
				0,
				3.5,
				7,
				10.5
			]
		},
		{
			"Target": "HeavyScout",
			"TargetAttribute": "UNIT_HP",
			"Type": "Modifier",
			"UseArray": "true",
			"ModifierArray": [
				0,
				43.75,
				87.5,
				131.25
			]
		},
		{
			"Target": "HeavyScout",
			"TargetAttribute": "UNIT_FIREPOWER",
			"Type": "Modifier",
			"UseArray": "true",
			"ModifierArray": [
				0,
				17.5,
				35,
				52.5
			]
		},
		{
			"Target": "TroopCarrier",
			"TargetAttribute": "UNIT_SPD",
			"Type": "Modifier",
			"UseArray": "true",
			"ModifierArray": [
				0,
				1,
				2,
				3
			]
		}
	],

	"CardSlotConfiguration": [
		{
			"$type": "PermanentSlot",
			"Index": "Hardpoint"
		},
		{
			"$type": "PermanentSlot",
			"Index": "Hull"
		},
		{
			"$type": "PermanentSlot",
			"Index": "Utility"
		},
		{
			"$type": "TimedSlot",
			"Index": "FleetCharacter"
		},
		{
			"$type": "TimedSlot",
			"Index": "FleetRune"
		}
	],

	"Units": [
		{
			"Name": "Corvette",
			"Type": 1,
			"StringId": "Corvette",
			"ImageId": 1,
			"Producible": "true",
			"BuildingRequirements": {
				"Normal": [ ],
				"AllianceStation": [
					{
						"Id": 740,
						"Level": 1
					}
				]
			},
			"Stats": {
				"COST_UPKEEP": 1,
				"COST_MTL": 100,
				"COST_GAS": 60,
				"COST_CRS": 40,
				"COST_TIME": 5,
				"UNIT_FIREPOWER": 60,
				"UNIT_HP": 150,
				"UNIT_XPVAL": 2,
				"UNIT_SPD": 8,
				"UNIT_FSIZE": 800,
				"UNIT_CARGO": 10,
				"UNIT_CARD_SPACE": 3,
				"UNIT_ESCORT_COUNT": 1,
				"UNIT_XP_GAIN": 1,
				"UNIT_IN_ASSAULT": 1,
				"UNIT_IN_RAID": 1
			}
		},
		{
			"Name": "Patrol Ship",
			"Type": 2,
			"StringId": "PatrolShip",
			"ImageId": 2,
			"Producible": "true",
			"BuildingRequirements": {
				"Normal": [  ],
				"AllianceStation": [
					{
						"Id": 740,
						"Level": 1
					}
				]
			},
			"Stats": {
				"COST_UPKEEP": 1,
				"COST_MTL": 75,
				"COST_GAS": 50,
				"COST_CRS": 125,
				"COST_TIME": 7.5,
				"UNIT_FIREPOWER": 80,
				"UNIT_HP": 200,
				"UNIT_XPVAL": 2,
				"UNIT_SPD": 6,
				"UNIT_FSIZE": 800,
				"UNIT_CARGO": 5,
				"UNIT_CARD_SPACE": 3,
				"UNIT_ESCORT_COUNT": 1,
				"UNIT_XP_GAIN": 1,
				"UNIT_IN_ASSAULT": 1,
				"UNIT_IN_RAID": 1
			}
		},
		{
			"Name": "Scout",
			"Type": 10,
			"StringId": "Scout",
			"ImageId": 10,
			"Producible": "true",
			"BuildingRequirements": {
				"Normal": [  ],
				"AllianceStation": [
					{
						"Id": 740,
						"Level": 1
					}
				]
			},
			"Stats": {
				"COST_UPKEEP": 1,
				"COST_MTL": 90,
				"COST_GAS": 150,
				"COST_CRS": 60,
				"COST_TIME": 10,
				"UNIT_FIREPOWER": 70,
				"UNIT_HP": 175,
				"UNIT_XPVAL": 2,
				"UNIT_SPD": 8,
				"UNIT_FSIZE": 800,
				"UNIT_CARGO": 5,
				"UNIT_SCANSTR": 0.75,
				"UNIT_SIGINT": 100,
				"UNIT_CARD_SPACE": 3,
				"UNIT_ESCORT_COUNT": 1,
				"UNIT_XP_GAIN": 1,
				"UNIT_IN_ASSAULT": 1,
				"UNIT_IN_RAID": 1,
				"UNIT_SCAN_RADIUS": 1
			}
		},
		{
			"Name": "Industrial",
			"Type": 9,
			"StringId": "Industrial",
			"ImageId": 9,
			"Producible": "true",
			"BuildingRequirements": { "Normal": [  ] },
			"Stats": {
				"COST_UPKEEP": 2,
				"COST_MTL": 200,
				"COST_GAS": 200,
				"COST_CRS": 200,
				"COST_TIME": 16,
				"UNIT_FIREPOWER": 0,
				"UNIT_HP": 400,
				"UNIT_XPVAL": 2,
				"UNIT_SPD": 3,
				"UNIT_FSIZE": 300,
				"UNIT_CARGO": 100,
				"UNIT_CARD_SPACE": 3,
				"UNIT_ESCORT_COUNT": 1,
				"UNIT_XP_GAIN": 1,
				"UNIT_IN_ASSAULT": 1,
				"UNIT_IN_RAID": 0
			}
		},
		{
			"Name": "Destroyer",
			"Type": 3,
			"StringId": "Destroyer",
			"ImageId": 3,
			"Producible": "true",
			"BuildingRequirements": {
				"Normal": [  ],
				"AllianceStation": [
					{
						"Id": 740,
						"Level": 2
					}
				]
			},
			"OutpostRequirements": { "Normal": [ "HeavyShipAssembly" ] },
			"Stats": {
				"COST_UPKEEP": 3,
				"COST_MTL": 550,
				"COST_GAS": 330,
				"COST_CRS": 220,
				"COST_TIME": 16,
				"UNIT_FIREPOWER": 300,
				"UNIT_HP": 750,
				"UNIT_XPVAL": 10,
				"UNIT_SPD": 8,
				"UNIT_FSIZE": 400,
				"UNIT_CARGO": 40,
				"UNIT_CARD_SPACE": 3,
				"UNIT_ESCORT_COUNT": 1,
				"UNIT_XP_GAIN": 1,
				"UNIT_IN_ASSAULT": 1,
				"UNIT_IN_RAID": 1
			}
		},
		{
			"Name": "Frigate",
			"Type": 4,
			"StringId": "Frigate",
			"ImageId": 4,
			"Producible": "true",
			"BuildingRequirements": {
				"Normal": [  ],
				"AllianceStation": [
					{
						"Id": 740,
						"Level": 2
					}
				]
			},
			"OutpostRequirements": { "Normal": [ "HeavyShipAssembly" ] },
			"Stats": {
				"COST_UPKEEP": 3,
				"COST_MTL": 412.5,
				"COST_GAS": 275,
				"COST_CRS": 687.5,
				"COST_TIME": 24,
				"UNIT_FIREPOWER": 400,
				"UNIT_HP": 1000,
				"UNIT_XPVAL": 10,
				"UNIT_SPD": 6,
				"UNIT_FSIZE": 400,
				"UNIT_CARGO": 20,
				"UNIT_CARD_SPACE": 3,
				"UNIT_ESCORT_COUNT": 1,
				"UNIT_XP_GAIN": 1,
				"UNIT_IN_ASSAULT": 1,
				"UNIT_IN_RAID": 1
			}
		},
		{
			"Name": "Recon",
			"Type": 12,
			"StringId": "Recon",
			"ImageId": 12,
			"Producible": "true",
			"BuildingRequirements": {
				"Normal": [  ],
				"AllianceStation": [
					{
						"Id": 740,
						"Level": 2
					}
				]
			},
			"OutpostRequirements": { "Normal": [ "HeavyShipAssembly" ] },
			"Stats": {
				"COST_UPKEEP": 3,
				"COST_MTL": 495.00000000000006,
				"COST_GAS": 825.0000000000001,
				"COST_CRS": 330.00000000000006,
				"COST_TIME": 32,
				"UNIT_FIREPOWER": 350,
				"UNIT_HP": 875,
				"UNIT_XPVAL": 10,
				"UNIT_SPD": 8,
				"UNIT_FSIZE": 400,
				"UNIT_CARGO": 20,
				"UNIT_SCANSTR": 1.5,
				"UNIT_SIGINT": 100,
				"UNIT_CARD_SPACE": 3,
				"UNIT_ESCORT_COUNT": 1,
				"UNIT_XP_GAIN": 1,
				"UNIT_IN_ASSAULT": 1,
				"UNIT_IN_RAID": 1,
				"UNIT_SCAN_RADIUS": 1
			}
		},
		{
			"Name": "Gunship",
			"Type": 7,
			"StringId": "Gunship",
			"ImageId": 7,
			"Producible": "true",
			"BuildingRequirements": {
				"Normal": [
					{
						"Id": 130,
						"Level": 1
					}
				]
			},
			"OutpostRequirements": { "Normal": [ "HeavyShipAssembly" ] },
			"Stats": {
				"COST_UPKEEP": 6,
				"COST_MTL": 1650.0000000000002,
				"COST_GAS": 990.0000000000001,
				"COST_CRS": 660.0000000000001,
				"COST_TIME": 60,
				"UNIT_FIREPOWER": 400,
				"UNIT_BOMB": 80,
				"UNIT_HP": 1000,
				"UNIT_XPVAL": 10,
				"UNIT_SPD": 5,
				"UNIT_FSIZE": 120,
				"UNIT_CARGO": 10,
				"UNIT_CARD_SPACE": 3,
				"UNIT_ESCORT_COUNT": 1,
				"UNIT_XP_GAIN": 1,
				"UNIT_IN_ASSAULT": 1,
				"UNIT_IN_RAID": 1
			}
		},
		{
			"Name": "Troop Carrier",
			"Type": 8,
			"StringId": "TroopCarrier",
			"ImageId": 8,
			"Producible": "true",
			"BuildingRequirements": { "Normal": [  ] },
			"OutpostRequirements": { "Normal": [ "HeavyShipAssembly" ] },
			"RequiredInfrastructurePoints": 15,
			"Stats": {
				"COST_UPKEEP": 200,
				"COST_MTL": 250000,
				"COST_GAS": 250000,
				"COST_CRS": 250000,
				"COST_TIME": 1440,
				"UNIT_FIREPOWER": 400,
				"UNIT_HP": 1000,
				"UNIT_XPVAL": 10,
				"UNIT_SPD": 3,
				"UNIT_FSIZE": 80,
				"UNIT_CARGO": 100,
				"UNIT_SIGINT": -1000,
				"UNIT_CARD_SPACE": 3,
				"UNIT_ESCORT_COUNT": 1,
				"UNIT_XP_GAIN": 1,
				"UNIT_STATION_CAPTURE": 20,
				"UNIT_IN_ASSAULT": 1,
				"UNIT_IN_RAID": 1
			}
		},
		{
			"Name": "Carrier",
			"Type": 6,
			"StringId": "Carrier",
			"ImageId": 6,
			"Producible": "true",
			"BuildingRequirements": {
				"Normal": [  ],
				"AllianceStation": [
					{
						"Id": 740,
						"Level": 3
					}
				]
			},
			"OutpostRequirements": { "Normal": [ "CapitalShipAssembly" ] },
			"Stats": {
				"COST_UPKEEP": 9,
				"COST_MTL": 4400,
				"COST_GAS": 2640,
				"COST_CRS": 1760,
				"COST_TIME": 64,
				"UNIT_FIREPOWER": 2000,
				"UNIT_HP": 5000,
				"UNIT_XPVAL": 50,
				"UNIT_SPD": 6,
				"UNIT_FSIZE": 200,
				"UNIT_CARGO": 100,
				"UNIT_CARD_SPACE": 3,
				"UNIT_ESCORT_COUNT": 1,
				"UNIT_XP_GAIN": 1,
				"UNIT_IN_ASSAULT": 1,
				"UNIT_IN_RAID": 1
			}
		},
		{
			"Name": "Dreadnought",
			"Type": 5,
			"StringId": "Dreadnought",
			"ImageId": 5,
			"Producible": "true",
			"BuildingRequirements": {
				"Normal": [  ],
				"AllianceStation": [
					{
						"Id": 740,
						"Level": 3
					}
				]
			},
			"OutpostRequirements": { "Normal": [ "CapitalShipAssembly" ] },
			"Stats": {
				"COST_UPKEEP": 9,
				"COST_MTL": 2640,
				"COST_GAS": 1760,
				"COST_CRS": 4400,
				"COST_TIME": 80,
				"UNIT_FIREPOWER": 1800,
				"UNIT_BOMB": 100,
				"UNIT_HP": 4500,
				"UNIT_XPVAL": 50,
				"UNIT_SPD": 6,
				"UNIT_FSIZE": 200,
				"UNIT_CARGO": 50,
				"UNIT_CARD_SPACE": 3,
				"UNIT_ESCORT_COUNT": 1,
				"UNIT_XP_GAIN": 1,
				"UNIT_IN_ASSAULT": 1,
				"UNIT_IN_RAID": 1
			}
		},
		{
			"Name": "Freighter",
			"Type": 14,
			"StringId": "Freighter",
			"ImageId": 1,
			"Producible": "false",
			"BuildingRequirements": { "Normal": [  ] }
		}
	]
};
