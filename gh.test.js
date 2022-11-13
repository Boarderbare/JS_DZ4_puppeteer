let page;

describe("Github page tests", () => {
  beforeEach(async () => {
    page = await browser.newPage();
    await page.goto("https://github.com/team");
  });

  afterEach(() => {
    page.close();
  });

  test("The h1 header content'", async () => {
    await page.setDefaultNavigationTimeout(3 * 10000);
    const firstLink = await page.$("header div div a");
    await firstLink.click();
    await page.waitForSelector("h1");
    const title2 = await page.title();
    expect(title2).toEqual(
      "GitHub for teams · Build like the best teams on the planet · GitHub"
    );
  },5000);

  test("The first link attribute", async () => {
    const actual = await page.$eval("a", (link) => link.getAttribute("href"));
    expect(actual).toEqual("#start-of-content");
  }, 6000);

  test("The page contains Sign in button", async () => {
    const btnSelector = ".btn-large-mktg.btn-mktg";
    await page.waitForSelector(btnSelector, { visible: true });
    const actual = await page.$eval(btnSelector, (link) => link.textContent);
    expect(actual).toContain("Get started with Team");
  },7000);
});

test("The page https://github.com/pricing contains title", async () => {
  page = await browser.newPage();
  await page.goto("https://github.com/pricing");
  await page.waitForSelector("h1");
  const title3 = await page.title();
  expect(title3).toEqual("Pricing · Plans for every developer · GitHub");
});

test("The page https://github.com/features/actions contains title", async () => {
  page = await browser.newPage();
  await page.goto("https://github.com/features/actions");
  await page.waitForSelector("h1");
  const title3 = await page.title();
  expect(title3).toEqual("Features • GitHub Actions · GitHub");
});

test("The page https://github.com/features/security contains title", async () => {
  page = await browser.newPage();
  await page.goto("https://github.com/features/security");
  await page.waitForSelector("h1");
  const title3 = await page.title();
  expect(title3).toEqual("Features · Security · GitHub");
});
