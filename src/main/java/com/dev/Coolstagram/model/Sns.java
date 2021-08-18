package com.dev.Coolstagram.model;

import java.util.Date;
import lombok.Data;

@Data
public class Sns {

	private int id;
	private String name;
	private String content;
	private Date date;
	private String image;
}
