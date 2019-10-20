package com.sca.ativo.config;

//@Profile("basic-security")
//@EnableWebSecurity
public class BasicSecurityConfig { //extends WebSecurityConfigurerAdapter {

//	@Autowired
//	private UserDetailsService userDetailsService;
//	
//	@Autowired
//	private ScaAtivosProperty scaAtivosProperty;
//	
//	@Override
//	protected void configure(AuthenticationManagerBuilder auth) throws Exception {
//		auth.userDetailsService(userDetailsService).passwordEncoder(passwordEncoder());
//	}
//	
//	@Bean
//	public PasswordEncoder passwordEncoder() {
//		return new BCryptPasswordEncoder();
//	}
//	
//	@Override
//	protected void configure(HttpSecurity http) throws Exception {
//		http
//		.cors()
//		.and()
//		.authorizeRequests()
//			.anyRequest()
//			.authenticated()
//			.and()
//			.httpBasic()
//			.and()
//			.sessionManagement()
//				.sessionCreationPolicy(SessionCreationPolicy.STATELESS)
//			.and()
//			.csrf().disable();
//	}
//	
//	@Bean
//	public CorsFilter corsFilter() {
//		
//		CorsConfiguration config = new CorsConfiguration();
//		config.setAllowCredentials(true);
//		config.addAllowedHeader("*");
//		config.addAllowedMethod("*");
//		config.setMaxAge(3600L);
//		config.setAllowedOrigins(scaAtivosProperty.getOriginsPermitida());
//		
//		UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
//		source.registerCorsConfiguration("/**", config);
//		
//		return new CorsFilter(source);
//	}
	
}
