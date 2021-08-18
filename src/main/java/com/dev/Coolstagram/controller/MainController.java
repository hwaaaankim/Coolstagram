package com.dev.Coolstagram.controller;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

import com.dev.Coolstagram.model.Detail;
import com.dev.Coolstagram.model.Sns;
import com.dev.Coolstagram.model.Web;

@Controller
public class MainController {

	
	@GetMapping({"/","/home"})
	public String home() {
		return "front/index";
	}
	
	@GetMapping("/notice")
	public String notice(){
		return "front/notice";
	}
	
	@GetMapping("/event")
	public String event() {
		return "front/event";
	}
	
	@GetMapping("/service")
	public String service() {
		return "front/service";
	}
	@GetMapping("/portfolio")
	public String portfolio(Model model) {
		
		List<Web> web = new ArrayList<Web>();
		List<Sns> sns = new ArrayList<Sns>();
		List<Detail> detail = new ArrayList<Detail>();
		
		Detail d1 = new Detail();
		Sns s1 = new Sns();
		Web w1 = new Web();
		
		d1.setId(1);
		d1.setContent("detail content 01");
		d1.setName("detail name 01");
		d1.setImage("/library/front/images/temp/temp_dp_02.jpg");
		
		s1.setId(1);
		s1.setName("sns name 01");
		s1.setContent("sns content 01");
		s1.setDate(new Date());
		s1.setImage("/library/front/images/temp/temp-01.jpg");
		
		w1.setId(1);
		w1.setName("web name 01");
		w1.setContent("web content 01");
		w1.setAddress("web address 01");
		w1.setImage("/library/front/images/blog/06.jpg");
		
		Detail d2 = new Detail();
		Sns s2 = new Sns();
		Web w2 = new Web();
		
		d2.setId(2);
		d2.setContent("detail content 02");
		d2.setName("detail name 02");
		d2.setImage("/library/front/images/temp/temp_dp_02.jpg");
		
		s2.setId(2);
		s2.setName("sns name 02");
		s2.setContent("sns content 02");
		s2.setDate(new Date());
		s2.setImage("/library/front/images/temp/temp-02.jpg");
		
		w2.setId(2);
		w2.setName("web name 02");
		w2.setContent("web content 02");
		w2.setAddress("web address 02");
		w2.setImage("/library/front/images/blog/06.jpg");
		
		Detail d3 = new Detail();
		Sns s3 = new Sns();
		Web w3 = new Web();
		
		d3.setId(3);
		d3.setContent("detail content 03");
		d3.setName("detail name 03");
		d3.setImage("/library/front/images/temp/temp_dp_03.jpg");
		
		s3.setId(3);
		s3.setName("sns name 03");
		s3.setContent("sns content 03");
		s3.setDate(new Date());
		s3.setImage("/library/front/images/temp/temp-03.jpg");
		
		w3.setId(3);
		w3.setName("web name 03");
		w3.setContent("web content 03");
		w3.setAddress("web address 03");
		w3.setImage("/library/front/images/blog/06.jpg");
		
		Detail d4 = new Detail();
		Sns s4 = new Sns();
		Web w4 = new Web();
		
		d4.setId(4);
		d4.setContent("detail content 04");
		d4.setName("detail name 04");
		d4.setImage("/library/front/images/temp/temp_dp_03.jpg");
		
		s4.setId(4);
		s4.setName("sns name 04");
		s4.setContent("sns content 04");
		s4.setDate(new Date());
		s4.setImage("/library/front/images/temp/temp-03.jpg");
		
		w4.setId(4);
		w4.setName("web name 04");
		w4.setContent("web content 04");
		w4.setAddress("web address 04");
		w4.setImage("/library/front/images/blog/06.jpg");
		
		Detail d5 = new Detail();
		Sns s5 = new Sns();
		Web w5 = new Web();
		
		d5.setId(5);
		d5.setContent("detail content 05");
		d5.setName("detail name 05");
		d5.setImage("/library/front/images/temp/temp_dp_03.jpg");
		
		s5.setId(5);
		s5.setName("sns name 05");
		s5.setContent("sns content 05");
		s5.setDate(new Date());
		s5.setImage("/library/front/images/temp/temp-03.jpg");
		
		w5.setId(5);
		w5.setName("web name 05");
		w5.setContent("web content 05");
		w5.setAddress("web address 05");
		w5.setImage("/library/front/images/blog/06.jpg");
		
		Detail d6 = new Detail();
		Sns s6 = new Sns();
		Web w6 = new Web();
		
		d6.setId(6);
		d6.setContent("detail content 06");
		d6.setName("detail name 06");
		d6.setImage("/library/front/images/temp/temp_dp_03.jpg");
		
		s6.setId(6);
		s6.setName("sns name 06");
		s6.setContent("sns content 06");
		s6.setDate(new Date());
		s6.setImage("/library/front/images/temp/temp-03.jpg");
		
		w6.setId(6);
		w6.setName("web name 06");
		w6.setContent("web content 06");
		w6.setAddress("web address 06");
		w6.setImage("/library/front/images/blog/06.jpg");
	
		
		Sns s7 = new Sns();
		Web w7 = new Web();
		
		s7.setId(7);
		s7.setName("sns name 07");
		s7.setContent("sns content 07");
		s7.setDate(new Date());
		s7.setImage("/library/front/images/temp/temp-03.jpg");
		
		w7.setId(7);
		w7.setName("web name 07");
		w7.setContent("web content 07");
		w7.setAddress("web address 07");
		w7.setImage("/library/front/images/blog/06.jpg");
	
		
		Web w8 = new Web();
		
		w8.setId(8);
		w8.setName("web name 08");
		w8.setContent("web content 08");
		w8.setAddress("web address 08");
		w8.setImage("/library/front/images/blog/06.jpg");
	
		detail.add(d1);
		detail.add(d2);
		detail.add(d3);
		detail.add(d4);
		detail.add(d5);
		detail.add(d6);
		
		sns.add(s1);
		sns.add(s2);
		sns.add(s3);
		sns.add(s4);
		sns.add(s5);
		sns.add(s6);
		sns.add(s7);
		
		web.add(w1);
		web.add(w2);
		web.add(w3);
		web.add(w4);
		web.add(w5);
		web.add(w6);
		web.add(w7);
		web.add(w8);
		
		model.addAttribute("web", web);
		model.addAttribute("sns", sns);
		model.addAttribute("detail", detail);
		
		return "front/portfolio";
	}
	
	@GetMapping("/packages")
	public String packages() {
		return "front/packages";
	}
	
	@GetMapping("/influencer")
		public String influencer() {
			return "front/influencer";
		}
}
