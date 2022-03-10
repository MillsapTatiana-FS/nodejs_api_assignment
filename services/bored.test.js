const { loadJestConfigProvider } = require("@craco/craco/lib/cra");
const {
    bored
} = require("./bored");

jest.mock("./bored")

describe("Bored service test", () => {
    test("should return activity", async ()=> {
        const result = await bored();
        expect(result).toBeDefined();
        expect(result.type).toBeDefined();
    });
})