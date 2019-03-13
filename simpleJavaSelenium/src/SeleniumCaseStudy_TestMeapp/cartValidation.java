package SeleniumCaseStudy_TestMeapp;

import org.testng.annotations.AfterClass;
import org.testng.annotations.Test;
import org.testng.annotations.BeforeClass;
import org.testng.AssertJUnit;
import java.util.concurrent.TimeUnit;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.interactions.Actions;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;
import org.testng.Assert;
import org.testng.annotations.AfterClass;
import org.testng.annotations.BeforeClass;
import org.testng.annotations.Test;

public class cartValidation {
	WebDriver driver;
	String ExpectedResult="Home";
	
	@BeforeClass
	public void setup()
	{
		System.setProperty("webdriver.gecko.driver", "C:\\Users\\v.ramiya.surendran\\Downloads\\geckodriver.exe");
	    driver=new FirefoxDriver();
		driver.get("http://localhost:8090/TestMeApp/fetchcat.htm");
	}
	@Test(priority=1)
	public void SignIn()
	{
			driver.findElement(By.linkText("SignIn")).click();
		    driver.findElement(By.name("userName")).sendKeys("lalitha");
		    driver.findElement(By.name("password")).sendKeys("Password123");
		    driver.findElement(By.name("Login")).click();
		   AssertJUnit.assertEquals(ExpectedResult, driver.getTitle());
			}
	
	@Test(priority=2)
	public void CartValidation()
	{
		driver.manage().timeouts().implicitlyWait(30, TimeUnit.SECONDS);
	WebElement menu1=driver.findElement(By.linkText("All Categories"));
	Actions act1=new Actions(driver);
	act1.moveToElement(menu1).click().build().perform();
	act1.moveToElement(driver.findElement(By.xpath("/html/body/header/div[3]/div/div/ul/li[2]/ul/li[1]/a/span"))).click().build().perform();
	act1.moveToElement(driver.findElement(By.xpath("//*[@id=\"submenuul11290\"]/li[1]/a/span"))).click().build().perform();
	WebDriverWait wait=new WebDriverWait(driver,10);
	WebElement AddtoCart=wait.until(ExpectedConditions.elementToBeClickable(By.linkText("Add to cart")));
	act1.moveToElement(AddtoCart).click().build().perform();
	
	driver.findElement(By.partialLinkText("Cart")).click();
	WebElement quantity=wait.until(ExpectedConditions.presenceOfElementLocated(By.xpath("//*[@id=\"quantity_1\"]")));
	String value=quantity.getAttribute("value");
	Assert.assertEquals(value, "1");
	
		}
		
	@AfterClass
	public void teardown()
	{
		driver.close();
	}
}
