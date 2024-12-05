import {CityType} from '../02-object-tests/object-types';
import {demolishHousesOnTheStreet, getBuildingsWithStaffCountGreaterThen} from './filter';

let city: CityType;

beforeEach(() => {
  city = {
    title: 'New York',
    houses: [
      {
        id: 1,
        buildedAt: 2012,
        repaired: false,
        address: {
          number: 100,
          street: {
            title: 'White street',
          }
        }
      },
      {
        id: 2,
        buildedAt: 2008,
        repaired: false,
        address: {
          number: 100,
          street: {
            title: 'Happy street',
          }
        }
      },
      {
        id: 3,
        buildedAt: 2020,
        repaired: false,
        address: {
          number: 200,
          street: {
            title: 'Happy street',
          }
        }
      },
    ],
    governmentBuildings: [
      {
        type: 'HOSPITAL',
        budget: 200000,
        staffCount: 200,
        address: {
          street: {
            title: 'Central Str'
          }
        }
      },
      {
        type: 'FIRE-STATION',
        budget: 500000,
        staffCount: 1000,
        address: {
          street: {
            title: 'Souths park str'
          }
        }
      }
    ],
    citizensNumber: 100000
  }
});

test("Houses should be destroyed", () => {
  demolishHousesOnTheStreet(city, "Happy street");

  expect(city.houses.length).toBe(1);
  expect(city.houses[0].id).toBe(1);
});

test("buildings with correct staff count", () => {
  let buildings =
    getBuildingsWithStaffCountGreaterThen(
      city.governmentBuildings,
      500);

  expect(buildings.length).toBe(1);
  expect(buildings[0].type).toBe("FIRE-STATION");
});
