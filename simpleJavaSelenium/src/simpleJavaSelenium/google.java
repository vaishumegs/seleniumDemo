package simpleJavaSelenium;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.testng.Assert;
import org.testng.annotations.AfterClass;
import org.testng.annotations.BeforeClass;
import org.testng.annotations.Test;

public class google {

	WebDriver driver;
	String ExpectedResult="Google";
	
	@BeforeClass
	public void setup()
	{
		System.setProperty("webdriver.gecko.driver", "C:\\Users\\v.ramiya.surendran\\Downloads\\geckodriver.exe");
	    driver=new FirefoxDriver();
		driver.get("https://www.google.com/");
	}
	
	@Test
	public void testSearch()
	{
		driver.findElement(By.name("q")).sendKeys("selenium");
		driver.findElement(By.name("q")).submit();
		Assert.assertEquals(ExpectedResult, driver.getTitle());
	}
	
	@AfterClass
	public void teardown()
	{
		driver.close();
	}


}
