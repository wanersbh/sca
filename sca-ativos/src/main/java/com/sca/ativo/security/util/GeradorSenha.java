package com.sca.ativo.security.util;

import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

public class GeradorSenha {

	public static void main(String[] args) {
		BCryptPasswordEncoder encoder = new BCryptPasswordEncoder();
		System.out.println(encoder.encode("admin"));
		//$2a$10$h6unB9hLl/pUw.ewNLNonumomxsBRfOf.ZLDCFyLoFgJy7gBDdZxO
	}
}
