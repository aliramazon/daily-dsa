const data1 = [
    { year: 1950, subject: "Peace", winner: "Ralph Bunche" },
    { year: 1950, subject: "Literature", winner: "Bertrand Russell" },
    { year: 1951, subject: "Medicine", winner: "Max Theiler" },
    { year: 1952, subject: "Chemistry", winner: "Archer J.P. Martin" },
    { year: 1952, subject: "Physics", winner: "Felix Bloch" },
    { year: 1953, subject: "Peace", winner: "George C. Marshall" },
    { year: 1953, subject: "Literature", winner: "Winston Churchill" },
    { year: 1954, subject: "Medicine", winner: "John F. Enders" },
    { year: 1955, subject: "Physics", winner: "Willis Lamb" },
    { year: 1956, subject: "Medicine", winner: "André Frédéric Cournand" },
    { year: 1957, subject: "Literature", winner: "Albert Camus" },
    { year: 1958, subject: "Peace", winner: "Georges Pire" },
    { year: 1959, subject: "Chemistry", winner: "Jaroslav Heyrovský" },
    { year: 1960, subject: "Medicine", winner: "Frank Macfarlane Burnet" },
    { year: 1960, subject: "Peace", winner: "Albert Lutuli" },
];

const data2 = [
    { year: 1960, subject: "Peace", winner: "Albert Lutuli" },
    { year: 1960, subject: "Medicine", winner: "Frank Macfarlane Burnet" },
    { year: 1961, subject: "Literature", winner: "Ivo Andrić" },
    { year: 1961, subject: "Peace", winner: "Dag Hammarskjöld" },
    { year: 1962, subject: "Medicine", winner: "Francis Crick" },
    { year: 1962, subject: "Peace", winner: "Linus Pauling" },
    { year: 1963, subject: "Literature", winner: "Giorgos Seferis" },
    {
        year: 1963,
        subject: "Peace",
        winner: "International Committee of the Red Cross",
    },
    { year: 1964, subject: "Peace", winner: "Martin Luther King Jr." },
    { year: 1964, subject: "Literature", winner: "Jean-Paul Sartre" },
    { year: 1965, subject: "Medicine", winner: "François Jacob" },
    { year: 1966, subject: "Peace", winner: "UNICEF" },
    { year: 1967, subject: "Literature", winner: "Miguel Ángel Asturias" },
    { year: 1968, subject: "Peace", winner: "René Cassin" },
    {
        year: 1969,
        subject: "Peace",
        winner: "International Labour Organization",
    },
];

const data3 = [
    { year: 1970, subject: "Medicine", winner: "Bernard Katz" },
    { year: 1971, subject: "Peace", winner: "Willy Brandt" },
    { year: 1971, subject: "Medicine", winner: "Earl W. Sutherland Jr." },
    { year: 1972, subject: "Literature", winner: "Heinrich Böll" },
    { year: 1972, subject: "Medicine", winner: "Rodney Porter" },
    { year: 1973, subject: "Medicine", winner: "Karl von Frisch" },
    { year: 1973, subject: "Peace", winner: "Henry Kissinger" },
    { year: 1974, subject: "Literature", winner: "Eyvind Johnson" },
    { year: 1975, subject: "Medicine", winner: "David Baltimore" },
    { year: 1975, subject: "Chemistry", winner: "John Cornforth" },
    { year: 1976, subject: "Medicine", winner: "Baruch Blumberg" },
    { year: 1977, subject: "Peace", winner: "Amnesty International" },
    { year: 1978, subject: "Medicine", winner: "Werner Arber" },
    { year: 1979, subject: "Medicine", winner: "Allan Cormack" },
    { year: 1979, subject: "Peace", winner: "Mother Teresa" },
];

/* 1.  Create a function that takes an array of Nobel Prize objects. Return the number of distinct years in which no prize was awarded in the subject "Medicine" */

const medicineNotAwarded = (data) => {
    const map = new Map();

    data.forEach(({ year, subject }) => {
        if (map.has(year)) {
            if (subject === "Medicine") {
                map.set(year, subject);
            }
        } else {
            map.set(year, subject);
        }
    });

    let counter = 0;

    for (const [_, subject] of map) {
        if (subject !== "Medicine") {
            counter++;
        }
    }
    return counter;
};
console.log(medicineNotAwarded(data1));

/* 2. Create a function that takes an array of Nobel Prize records and returns an array of years in which neither "Physics" nor "Chemistry" awards were given. */

const physicsOrChemistryNotAwarded = (data) => {
    const map = new Map();
    const subjects = ["Physics", "Chemistry"];

    data.forEach(({ year, subject }) => {
        if (map.has(year)) {
            if (subjects.includes(subject)) {
                map.set(year, subject);
            }
        } else {
            map.set(year, subject);
        }
    });

    const years = [];

    for (const [year, subject] of map) {
        if (!subjects.includes(subject)) {
            years.push(year);
        }
    }

    return years;
};
console.log(physicsOrChemistryNotAwarded(data2));

/* 3. Create a function that takes a Nobel Prize list and returns an array of years where "Medicine" was awarded but neither "Peace" nor "Literature" was. */

const medicineAwardedButPeaceAndLiteratureNot = (data) => {
    const map = new Map();
    const subjects = ["Peace", "Literature"];

    data.forEach(({ year, subject }) => {
        if (map.has(year)) {
            if (subjects.includes(subject) && map.get(year) === "Medicine") {
                map.set(year, subject);
            }
        } else {
            map.set(year, subject);
        }
    });

    const years = [];

    for (const [year, subject] of map) {
        if (subject === "Medicine") {
            years.push(year);
        }
    }

    return years;
};

console.log(medicineAwardedButPeaceAndLiteratureNot(data3));

/* 4. Create a function that takes an array of Nobel Prize entries and returns an object where each key is a subject, and the value is the number of awards given in 1960. */

const countAwardsBySubjectIn1960 = (data) => {
    const counter = {};

    data.forEach(({ year, subject }) => {
        if (year === 1960) {
            if (counter[subject]) {
                counter[subject]++;
            } else {
                counter[subject] = 1;
            }
        }
    });

    return counter;
};

console.log(countAwardsBySubjectIn1960(data1));
