import axios from 'axios';
import cheerio from 'cheerio';

const requestHispsters = async () => {
  try {
    const { data } = await axios.get('https://hipsters.jobs/jobs/?q=&l=Remoto');
    return data;
  } catch (error) {
    console.log('error on REQUEST');
    console.log(error);
  }
};

const parseData = html => {
  let jobs = [];

  try {
    const $ = cheerio.load(html);

    const articles = $('body')
      .find("div[class='container']")
      .find('.search-results > article');

    articles.each((index, element) => {
      const location = $(element)
        .find(
          "span[class='listing-item__info--item listing-item__info--item-location']"
        )
        .text()
        .trim();

      const company = $(element)
        .find(
          "span[class='listing-item__info--item listing-item__info--item-company']"
        )
        .text()
        .trim();

      const employmentType = $(element)
        .find("span[class='listing-item__employment-type']")
        .text()
        .trim();

      const title = $(element)
        .find("a[class='link']")
        .text()
        .trim();

      const date = $(element)
        .find("div[class='listing-item__date']")
        .text()
        .trim();

      const link = $(element)
        .find("a[class='link']")
        .attr('href')
        .trim();

      const job = {
        title,
        company,
        employmentType,
        location,
        date,
        link,
      };

      jobs.push(job);
    });

    return jobs;
  } catch (error) {
    console.log('error on PARSE');

    console.log(error);
  }
};

const scrapData = async () => {
  const responseHtml = await requestHispsters();
  const jobs = parseData(responseHtml);

  return jobs;
};

export { scrapData as scrapHipstersData };
