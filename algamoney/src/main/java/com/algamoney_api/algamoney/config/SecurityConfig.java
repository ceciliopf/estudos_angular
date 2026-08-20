package com.algamoney_api.algamoney.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.provisioning.InMemoryUserDetailsManager;
import org.springframework.security.web.SecurityFilterChain;

import static org.springframework.security.config.Customizer.withDefaults;

@Configuration
@EnableWebSecurity
public class SecurityConfig {

    // 1. Substitui o configure(HttpSecurity http)
    @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
        http
            .csrf(csrf -> csrf.disable()) // Desabilita o CSRF com lambda
            .sessionManagement(session -> session.sessionCreationPolicy(SessionCreationPolicy.STATELESS)) // Configura a sessão como Stateless
            .authorizeHttpRequests(auth -> auth
                .requestMatchers("/categorias", "/error").permitAll() // antMatchers virou requestMatchers
                .anyRequest().authenticated()
            )
            .httpBasic(withDefaults()); // Habilita o Basic Auth

        return http.build();
    }

    // 2. Substitui o configure(AuthenticationManagerBuilder auth)
    @Bean
    public UserDetailsService userDetailsService() {
        UserDetails admin = User.builder()
            .username("admin")
            .password("{noop}admin") // O {noop} é obrigatório agora para senhas em texto puro
            .roles("ROLE")
            .build();

        return new InMemoryUserDetailsManager(admin);
    }
}