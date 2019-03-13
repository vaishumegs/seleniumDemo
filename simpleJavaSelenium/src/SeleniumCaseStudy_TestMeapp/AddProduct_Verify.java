package SeleniumCaseStudy_TestMeapp;

import org.testng.annotations.Test;
import org.testng.annotations.BeforeTest;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.interactions.Actions;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;
import org.testng.Assert;
import org.testng.annotations.AfterMethod;
import org.testng.annotations.AfterTest;

public class AddProduct_Verify {
	WebDriver driver;
  @Test(priority=0)
  public void AdminLogin() {
	  driver.findElement(By.linkText("SignIn")).click();
	  driver.findElement(By.name("userName")).sendKeys("admin");
	  driver.findElement(By.name("password")).sendKeys("Password456");
	  driver.findElement(By.name("Login")).click();
	  String admintitle=driver.getTitle();
	  System.out.println("Admin page title is "+admintitle);
	  Assert.assertEquals(admintitle,"Admin Home");
  }
  @Test(priority=1)
  public void AddProduct(){
	  driver.findElement(By.xpath("//div/button/h4[contains(text(),'Add Category')]")).click();
	  driver.findElement(By.name("catgName")).sendKeys("Fashion");
	  driver.findElement(By.name("catgDesc")).sendKeys("Fashion Items");
	  driver.findElement(By.xpath("//input[@value='Add']")).click();
  }
  @Test(priority=2)
  public void AdminSignout(){
	  driver.findElement(By.linkText("SignOut")).click();
  }
  @Test(priority=3)
  public void UserLogin(){
	  WebDriverWait wait2=new WebDriverWait(driver,20);
	  wait2.until(ExpectedConditions.presenceOfElementLocated(By.linkText("SignIn")));
	  driver.findElement(By.linkText("SignIn")).click();
	  driver.findElement(By.name("userName")).sendKeys("lalitha");
	  driver.findElement(By.name("password")).sendKeys("Password123");
	  driver.findElement(By.name("Login")).click();
  }
  @Test(priority=4)
  public void VerifyProductsAdded(){
	  WebDriverWait wait3=new WebDriverWait(driver,20);
	  wait3.until(ExpectedConditions.presenceOfElementLocated(By.xpath("//span[contains(text(),'All Categories')]")));
	  WebElement allcategories=driver.findElement(By.xpath("//span[contains(text(),'All Categories')]"));	 
	  Actions act=new Actions(driver);
	  act.clickAndHold(allcategories).build().perform();
	  String fashiontext=driver.findElement(By.linkText("Fashion")).getText();
	  Assert.assertEquals(fashiontext, "Fashion");
  }
  @Test(priority=5)
  public void UserLogout(){
	 driver.findElement(By.linkText("SignOut")).click();
  }

  @BeforeTest
  public void beforeMethod() {
	  System.setProperty("webdriver.gecko.driver", "C:\\Users\\v.ramiya.surendran\\Downloads\\geckodriver.exe");
	    driver=new FirefoxDriver();
	  driver.get("http://localhost:8083/TestMeApp");
  }

  @AfterTest
  public void afterMethod() {
	  driver.close();
  }

}
